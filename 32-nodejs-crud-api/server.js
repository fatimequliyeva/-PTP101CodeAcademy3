const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/index");
const limiter = require("./middlewares/rateLimiter"); // yalnız bir dəfə import et

dotenv.config();
const app = express();

// ümumi middleware-lər
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// bütün /api/ route-larına limit tətbiq et
app.use("/api/", limiter);

// route-lar
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// DB qoşulması
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
