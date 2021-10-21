import { Router } from "express";
import {
  createProviders,
  deleteProvider,
  getProvider,
  getProviders,
  updateProvider,
} from "../controllers/ctrlProviders";

const router = Router();
/**
 * @swagger
 * tags:
 *  name: Providers
 *  description: products endpoint
 * 
 */

/**
 * @swagger
 * /providers:
 *  get:
 *    summary: gets all products
 *    tags: [Providers]
 */
router.get("/providers", getProviders);

/**
 * @swagger
 * /providers:
 *  get:
 *    summary: get product
 *    tags: [Providers]
 * 
 */
router.get("/providers/:id", getProvider);

/**
 * @swagger
 * /providers:
 *  post:
 *    summary: create product
 *    tags: [Providers]
 * 
 */
router.post("/providers", createProviders);

/**
 * @swagger
 * /providers:
 *  delete:
 *    summary: delete product
 *    tags: [Providers]
 */
router.delete("/providers/:id", deleteProvider);

/**
 * @swagger
 * /providers:
 *  put:
 *    summary: update product
 *    tags: [Providers]
 */
router.put("/providers/:id", updateProvider);


export default router;
