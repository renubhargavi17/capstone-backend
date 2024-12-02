import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import veganRestaurantValidator from "../Validators/veganRestaurantValidator.js"

// Get all vegan restaurants
export const getAllVeganRestaurants = async (req, res) => {
  try {
    const veganRestaurants = await knex("veganrestaurant").select(
      "id",
      "name",
      "latitude",
      "longitude",
      "created_at",
      "updated_at"
    );

    res.status(200).json(veganRestaurants);
  } catch (err) {
    console.error("Error fetching vegan restaurants:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// Get a single vegan restaurant by ID
export const getVeganRestaurantById = async (req, res) => {
  try {
    const veganRestaurant = await knex("veganrestaurant")
      .where("id", req.params.id)
      .first();

    if (veganRestaurant) {
      res.status(200).json(veganRestaurant);
    } else {
      res.status(404).json({
        message: "Vegan restaurant not found",
      });
    }
  } catch (err) {
    console.error("Error fetching vegan restaurant by ID:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// POST/CREATE a new vegan restaurant
export const postNewVeganRestaurant = async (req, res) => {
  const validation = veganRestaurantValidator(req.body);

  if (!validation.valid) {
    return res.status(400).json({
      message: "Name, latitude, and longitude are required.",
    });
  }
  const { name, latitude, longitude } = req.body;

  if (!name || !latitude || !longitude) {
    return res.status(400).json({
      message: "Name, latitude, and longitude are required.",
    });
  }

  try {
    const [newVeganRestaurant] = await knex("veganrestaurant")
      .insert({ name, latitude, longitude })
      .returning(["id", "name", "latitude", "longitude", "created_at"]);

    res.status(201).json({
      message: "Successfully added a new vegan restaurant.",
      restaurant: newVeganRestaurant,
    });
  } catch (error) {
    console.error("Error creating new vegan restaurant:", error);
    res.status(500).json({
      message: "Error occurred while creating a new vegan restaurant.",
      error: error.message,
    });
  }
};

// PUT/EDIT a vegan restaurant
export const editVeganRestaurant = async (req, res) => {
  const validation = veganRestaurantValidator(req.body);

  if (!validation.valid) {
    return res.status(400).json({
      message: "Name, latitude, and longitude are required.",
    });
  }
  const { name, latitude, longitude } = req.body;

  if (!name || !latitude || !longitude) {
    return res.status(400).json({
      message: "Name, latitude, and longitude are required.",
    });
  }

  try {
    const veganRestaurant = await knex("veganrestaurant")
      .where("id", req.params.id)
      .first();

    if (!veganRestaurant) {
      return res.status(404).json({ message: "Vegan restaurant not found" });
    }

    await knex("veganrestaurant")
      .where("id", req.params.id)
      .update({ name, latitude, longitude });

    const updatedVeganRestaurant = await knex("veganrestaurant")
      .where("id", req.params.id)
      .first();

    res.status(200).json({
      message: "Successfully updated the vegan restaurant.",
      restaurant: updatedVeganRestaurant,
    });
  } catch (error) {
    console.error("Error updating vegan restaurant:", error);
    res.status(500).json({
      message: "Error occurred while updating the vegan restaurant.",
      error: error.message,
    });
  }
};

// DELETE a vegan restaurant by ID
export const deleteVeganRestaurantById = async (req, res) => {
  try {
    const deletedCount = await knex("veganrestaurant")
      .where("id", req.params.id)
      .delete();

    if (deletedCount === 0) {
      return res.status(404).json({
        message: `Vegan restaurant with ID ${req.params.id} not found.`,
      });
    }

    res.status(204).json({
      message: `Vegan restaurant with ID ${req.params.id} successfully deleted.`,
    });
  } catch (error) {
    console.error("Error deleting vegan restaurant:", error);
    res.status(500).json({
      message: "Error occurred while deleting the vegan restaurant.",
      error: error.message,
    });
  }
};
