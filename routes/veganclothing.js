import express from "express";
import {
  editVeganClothing,
  getAllVeganClothing,
  getVeganClothingById,
  deleteVeganClothingById,
  postNewVeganClothing
} from "../controllers/clothing-controller.js";

const veganClothingRoute = express.Router();

// Get all vegan clothing items
veganClothingRoute.get("/", getAllVeganClothing);

// Get a single vegan clothing item by ID
veganClothingRoute.get("/:id", getVeganClothingById);

// Create a new vegan clothing item
veganClothingRoute.post("/", postNewVeganClothing);

// Edit an existing vegan clothing item
veganClothingRoute.put("/:id", editVeganClothing);

// Delete a vegan clothing item by ID
veganClothingRoute.delete("/:id", deleteVeganClothingById);

export default veganClothingRoute;
