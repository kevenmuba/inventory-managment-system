import express from "express";

import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { isAdmin, protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/create", protect, isAdmin, createProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getProduct).put(updateProduct);

export default router;
