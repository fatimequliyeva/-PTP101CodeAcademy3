
const productValidator = (req, res, next) => {
  const { title, price } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Mehsulun adi mutleqdir",
    });
  }

  if (price < 0) {
    return res.status(400).json({
      success: false,
      message: "Mehsulun qiymEti menfi ola bilmez",
    });
  }

  next();
};

module.exports = productValidator;
