const Product = require("../models/Product");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

// GET SINGLE PRODUCT
const getProductById = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });

    }

    res.json(product);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// ADD PRODUCT
const addProduct = async (req, res) => {

  try {

    const product = new Product(req.body);

    await product.save();

    res.status(201).json(product);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {

  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });

    }

    res.json(product);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {

  try {

    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });

    }

    res.json({
      message: "Product Deleted Successfully",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};