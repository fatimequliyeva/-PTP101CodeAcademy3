const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const categoryValidator = require("../middlewares/categoryValidator");

router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategoryById);
router.post("/", categoryValidator, categoryController.createCategory);
router.put("/:id", categoryValidator, categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
