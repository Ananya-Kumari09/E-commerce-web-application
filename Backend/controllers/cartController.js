const Cart = require("../models/Cart");

// Get User Cart
exports.getCart = async (req, res) => {
  try {
      console.log("CART BODY:", req.body);
    console.log("USER:", req.user);

    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    if (!cart) {
      return res.status(200).json({
        success: true,
        items: [],
      });
    }

    res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Add To Cart

exports.addToCart = async (req, res) => {

  try {

    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {

      cart = await Cart.create({
        user: req.user.id,
        items: [],
      });

    }

    const exist = cart.items.find(
      item =>
        item.product.toString() === productId
    );

    if (exist) {

      exist.quantity += quantity || 1;

    } else {

      cart.items.push({
        product: productId,
        quantity: quantity || 1,
      });

    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Update Quantity

exports.updateQuantity = async (req, res) => {

  try {

    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {

      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });

    }

    const item = cart.items.find(
      item =>
        item.product.toString() === productId
    );

    if (!item) {

      return res.status(404).json({
        success: false,
        message: "Item not found",
      });

    }

    item.quantity = quantity;

    await cart.save();

    res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Remove Item

exports.removeFromCart = async (req, res) => {

  try {

    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {

      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });

    }

    cart.items = cart.items.filter(
      item =>
        item.product.toString() !== productId
    );

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Clear Cart

exports.clearCart = async (req, res) => {

  try {

    await Cart.findOneAndUpdate(
      { user: req.user.id },
      { items: [] }
    );

    res.status(200).json({
      success: true,
      message: "Cart cleared",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};