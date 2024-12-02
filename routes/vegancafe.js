import express from "express";
import {
  editVeganCafe,
  getAllVeganCafes,
  getVeganCafeById,
  deleteVeganCafeById,
  postNewVeganCafe
} from "../controllers/cafe-controller.js";

const veganCafeRoute = express.Router();

// Get all vegan cafes
veganCafeRoute.get("/", getAllVeganCafes);

// Get a single vegan cafe by ID
veganCafeRoute.get("/:id", getVeganCafeById);

// Create a new vegan cafe
veganCafeRoute.post("/", postNewVeganCafe);

// Edit an existing vegan cafe
veganCafeRoute.put("/:id", editVeganCafe);

// Delete a vegan cafe by ID
veganCafeRoute.delete("/:id", deleteVeganCafeById);

export default veganCafeRoute;
