const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const { search, sort } = req.query;
    let query = {}; //bos sert yoxlamaq ucun yaradilir 

    if (search) {
      query.title = { $regex: search, $options: "i" }; //herf fer q olmadan axdaris 
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
      message: "Mehsullar ugurla getirildi",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(404).json({ success: false, message: "Mehsul tapilmadi" });
    }
    return res.status(200).json({
      success: true,
      message: "Mehsul ugurla gEtirildi",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Yeni meHsul yaratmaqx
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    return res.status(201).json({
      success: true,
      message: "MEhsul uGurla yaradoldi",
      data: savedProduct,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// mehsulucu yenilokmek
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("category");

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Mehsul tapIlmadI" });
    }

    return res.status(200).json({
      success: true,
      message: "Mehsul ugurla yenilendi",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// mehsi;ub silmek
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Mehsul tapilmadi" });
    }
    return res.status(200).json({
      success: true,
      message: "Mehsul ugurla silindi",
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
