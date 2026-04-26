import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoute.js";

//configure env
dotenv.config();

const app = express();

//middelwares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(
        `Server Running on ${process.env.DEV_MODE || "development"} mode on port ${PORT}`.bgCyan.white
      );
    });
  } catch (error) {
    console.error("Failed to start server due to MongoDB connection error.".bgRed.white);
    process.exit(1);
  }
};

startServer();
