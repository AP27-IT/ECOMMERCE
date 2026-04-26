import productModel from "../models/productModel.js";

export const getProductsController = async (req, res) => {
  try {
    const products = await productModel.find({}).sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      message: "Products fetched successfully",
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Error while fetching products", error);
    res.status(500).send({
      success: false,
      message: "Error while fetching products",
      error: error.message,
    });
  }
};
