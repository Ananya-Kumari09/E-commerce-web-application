const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Place Order

exports.placeOrder = async (req, res) => {

  try {

    const {
      fullName,
      email,
      phone,
      address,
      city,
      postalCode
    } = req.body;

    const cart = await Cart.findOne({
      user: req.user.id
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {

      return res.status(400).json({
        success: false,
        message: "Cart is empty"
      });

    }

    const totalAmount = cart.items.reduce(

      (total, item) =>

        total +
        item.product.price * item.quantity,

      0

    );

    const order = await Order.create({

      user: req.user.id,

      items: cart.items,

      shippingAddress: {
        fullName,
        email,
        phone,
        address,
        city,
        postalCode
      },

      totalAmount,

      status: "Pending"

    });

    cart.items = [];
    await cart.save();

    res.status(201).json({

      success: true,
      message: "Order Placed Successfully",
      order

    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

// User Orders

exports.getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({

      user: req.user.id

    }).populate("items.product");

    res.status(200).json({

      success: true,
      orders

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};

// Admin Orders

exports.getAllOrders = async (req, res) => {

  try {

    const orders = await Order.find()

      .populate("user", "name email")
      .populate("items.product");

    res.status(200).json({

      success: true,
      orders

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};

// Update Order Status

exports.updateOrderStatus = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id);

    if (!order) {

      return res.status(404).json({

        success: false,
        message: "Order not found"

      });

    }

    order.status = req.body.status;

    await order.save();

    res.status(200).json({

      success: true,
      message: "Order Updated",
      order

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};