import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import productModel from "../models/productModel.js";

dotenv.config();

const dummyProducts = [
  {
    name: "Aurora Wireless Headphones",
    slug: "aurora-wireless-headphones",
    description:
      "Lightweight over-ear headphones with deep bass, 30-hour battery life, and a comfortable everyday fit.",
    price: 149,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    inventory: 18,
  },
  {
    name: "Summit Everyday Backpack",
    slug: "summit-everyday-backpack",
    description:
      "Water-resistant commuter backpack with a padded laptop sleeve, quick-access pockets, and all-day comfort.",
    price: 89,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    inventory: 24,
  },
  {
    name: "Slate Smartwatch",
    slug: "slate-smartwatch",
    description:
      "A crisp AMOLED smartwatch with fitness tracking, heart-rate monitoring, and smart notifications.",
    price: 199,
    category: "Wearables",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    inventory: 12,
  },
  {
    name: "Nimbus Desk Lamp",
    slug: "nimbus-desk-lamp",
    description:
      "Minimal LED lamp with adjustable brightness, warm-to-cool light modes, and a clean matte finish.",
    price: 59,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
    inventory: 30,
  },
  {
    name: "Terra Running Shoes",
    slug: "terra-running-shoes",
    description:
      "Responsive trainers built for daily miles with breathable mesh, cushioned support, and great grip.",
    price: 129,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    inventory: 20,
  },
  {
    name: "Canvas Travel Mug",
    slug: "canvas-travel-mug",
    description:
      "Double-wall insulated mug that keeps drinks hot for hours while fitting neatly into standard cup holders.",
    price: 29,
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=80",
    inventory: 40,
  },
];

const seedProducts = async () => {
  try {
    await connectDB();
    await productModel.deleteMany({});
    const products = await productModel.insertMany(dummyProducts);

    console.log(`Seeded ${products.length} dummy products successfully.`);
  } catch (error) {
    console.error("Failed to seed products", error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seedProducts();
