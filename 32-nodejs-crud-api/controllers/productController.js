const Product = require("../models/productModel");

// Bütün məhsulları gətirir (search və sort dəstəklənir)
const getProducts = async (req, res) => {
  try {
    const { search, sort } = req.query;
    let query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" }; // case-insensitive axtarış
    }

    let products = Product.find(query).populate("category");

    if (sort === "asc") {
      products = products.sort({ price: 1 });
    } else if (sort === "desc") {
      products = products.sort({ price: -1 });
    }

    const result = await products;
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ID-yə görə məhsul
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Yeni məhsul yaratmaq
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: savedProduct,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Məhsulu yeniləmək
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("category");

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Məhsulu silmək
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
