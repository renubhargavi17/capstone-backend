import express from "express";
import {
  editGroceryStore,
  getAllGroceryStores,
  getGroceryStoreById,
  deleteGroceryStoreById,
  postNewGroceryStore
} from "../controllers/grocery-controller.js";

const groceryStoreRoute = express.Router();

// Get all grocery stores
groceryStoreRoute.get("/", getAllGroceryStores);

// Get a single grocery store by ID
groceryStoreRoute.get("/:id", getGroceryStoreById);

// Create a new grocery store
groceryStoreRoute.post("/", postNewGroceryStore);

// Edit an existing grocery store
groceryStoreRoute.put("/:id", editGroceryStore);

// Delete a grocery store by ID
groceryStoreRoute.delete("/:id", deleteGroceryStoreById);

export default groceryStoreRoute;
