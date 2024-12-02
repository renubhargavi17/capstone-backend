import express from "express";
import {
  editVeganCosmetics,
  getAllVeganCosmetics,
  getVeganCosmeticsById,
  deleteVeganCosmeticsById,
  postNewVeganCosmetics
} from "../controllers/cosmetics-controller.js";

const veganCosmeticsRoute = express.Router();

// Get all vegan cosmetics
veganCosmeticsRoute.get("/", getAllVeganCosmetics);

// Get a single vegan cosmetic by ID
veganCosmeticsRoute.get("/:id", getVeganCosmeticsById);

// Create a new vegan cosmetic
veganCosmeticsRoute.post("/", postNewVeganCosmetics);

// Edit an existing vegan cosmetic
veganCosmeticsRoute.put("/:id", editVeganCosmetics);

// Delete a vegan cosmetic by ID
veganCosmeticsRoute.delete("/:id", deleteVeganCosmeticsById);

export default veganCosmeticsRoute;
