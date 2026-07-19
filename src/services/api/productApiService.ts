import { client } from "../api/client";
import { Product } from "../../types/product";

/**
 * Fetch all products
 */
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await client.get<Product[]>("/products");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

/**
 * Fetch single product
 */
export const getProductById = async (
  id: number
): Promise<Product> => {
  try {
    const response = await client.get<Product>(`/products/${id}`);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
};