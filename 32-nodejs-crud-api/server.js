const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/index")




dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use("/api/categories",categoryRoutes);
app.use("/api/products",productRoutes);

connectDB();


const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
     console.log(`Server running on port ${PORT}`);

})