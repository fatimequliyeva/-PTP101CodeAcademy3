// middlewares/productValidator.js
const productValidator = (req, res, next) => {
  const { title, price } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Product title is required",
    });
  }

  if (price < 0) {
    return res.status(400).json({
      success: false,
      message: "Product price cannot be negative",
    });
  }

  next();
};

module.exports = productValidator;
