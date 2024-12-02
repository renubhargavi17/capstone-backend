import express from "express";
import {
  editVeganRestaurant,
  getAllVeganRestaurants,
  getVeganRestaurantById,
  deleteVeganRestaurantById,
  postNewVeganRestaurant
} from "../controllers/restaurants-controller.js";

const veganRestaurantRoute = express.Router();

// Get all vegan restaurants
veganRestaurantRoute.get("/", getAllVeganRestaurants);

// Get a single vegan restaurant by ID
veganRestaurantRoute.get("/:id", getVeganRestaurantById);

// Create a new vegan restaurant
veganRestaurantRoute.post("/", postNewVeganRestaurant);

// Edit an existing vegan restaurant
veganRestaurantRoute.put("/:id", editVeganRestaurant);

// Delete a vegan restaurant by ID
veganRestaurantRoute.delete("/:id", deleteVeganRestaurantById);

export default veganRestaurantRoute;
