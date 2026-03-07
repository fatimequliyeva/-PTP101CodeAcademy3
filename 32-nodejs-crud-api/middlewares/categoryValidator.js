
const categoryValidator = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Kateqoriya adi mutleqdir",
    });
  }

  next();
};

module.exports = categoryValidator;
