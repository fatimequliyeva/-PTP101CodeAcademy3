const Category = require("../models/categoryModel"); //qutu modelini getirirem

const getCategories = async (req, res) => { //butun categryni getirir
  try {
    const categories = await Category.find(); //find methodudu 
    return res.status(200).json({ //eger okeydise bu meSAJ GELECKEK 
      success: true,
      message: "Kateqoriyalar ugurla grtirildi",
      data: categories,
    });
  } catch (error) { //eror olsa bu dusecek pryekt partdamayacq 
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id); //lakin serti var ife duse o gelecek 
    if (!category) {
      return res.status(404).json({ success: false, message: "Kateqoriya tapoilmadi" });  //idye gore
    }
    return res.status(200).json({
      success: true,
      message: "Kateqoriya ugurla grtirildi",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Yeni kateqoriya yaratmaq
const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    return res.status(201).json({
      success: true,
      message: "Kateqoriya ugurla yaradildi",
      data: savedCategory,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// elde olani yenilemek
const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ success: false, message: "Kateqoriya tapilmadi" });
    }
    return res.status(200).json({
      success: true,
      message: "Kateqoriya ugurla yenilEndi",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// silmekdi
const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ success: false, message: "Kateqoriya tapilmadi" });
    }
    return res.status(200).json({
      success: true,
      message: "Kateqoriya ugurla silindi",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// yazdqmz crud mentiqni caqrmaqa 
module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
