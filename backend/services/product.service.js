// product.service.js
import Product from "../models/productModal.js";

export const createProductService = async (productData, userId) => {
  const product = await Product.create({
    ...productData,
    user: userId,
  });
  return product;
};

export const getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

export const getProductService = async (id) => {
  const product = await Product.findById(id);
  return product;
};

export const updateProductService = async (id, productData) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
    new: true,
    runValidators: true,
  });
  return updatedProduct;
};
