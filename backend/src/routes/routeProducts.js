import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/ctrlProducts";

const router = Router();
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: products endpoint
 * 
 */

/**
 * @swagger
 * tags:
 *  name: Category
 *  description: Category endpoint
 * 
 */

/**
 * @swagger
 * /products:
 *  get:
 *    summary: gets all products
 *    tags: [Products]
 */
router.get("/products", getProducts);

/**
 * @swagger
 * /products:
 *  get:
 *    summary: get product
 *    tags: [Products]
 * 
 */
router.get("/products/:id", getProduct);

/**
 * @swagger
 * /products:
 *  post:
 *    summary: create product
 *    tags: [Products]
 * 
 */
router.post("/products", createProduct);

/**
 * @swagger
 * /products:
 *  delete:
 *    summary: delete product
 *    tags: [Products]
 */
router.delete("/products/:id", deleteProduct);

/**
 * @swagger
 * /products:
 *  put:
 *    summary: update product
 *    tags: [Products]
 */
router.put("/products/:id", updateProduct);


export default router;
