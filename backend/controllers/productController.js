// productController.js
import { asyncHandler } from "../utils/asynchandler.js";
import {
  createProductService,
  getProductsService,
  getProductService,
  updateProductService,
} from "../services/product.service.js";

export const createProduct = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const product = await createProductService(req.body, req.user._id);

  res.status(201).json(product);
});

export const getProducts = asyncHandler(async (req, res) => {
  const products = await getProductsService();

  res.status(200).json({ count: products.length, products });
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await getProductService(req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product Not Found!" });
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await getProductService(id);

  if (!product) {
    return res.status(404).json({ message: "Product Not Found" });
  }

  const updatedProduct = await updateProductService(id, req.body);

  res.status(200).json(updatedProduct);
});
