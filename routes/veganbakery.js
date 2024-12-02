import express from "express";
import {
  editVeganBakery,
  getAllVeganBakeries,
  getVeganBakeryById,
  deleteVeganBakeryById,
  postNewVeganBakery
} from "../controllers/bakery-controller.js";

const veganBakeryRoute = express.Router();

// Get all vegan bakeries
veganBakeryRoute.get("/", getAllVeganBakeries);

// Get a single vegan bakery by ID
veganBakeryRoute.get("/:id", getVeganBakeryById);

// Create a new vegan bakery
veganBakeryRoute.post("/", postNewVeganBakery);

// Edit an existing vegan bakery
veganBakeryRoute.put("/:id", editVeganBakery);

// Delete a vegan bakery by ID
veganBakeryRoute.delete("/:id", deleteVeganBakeryById);

export default veganBakeryRoute;
