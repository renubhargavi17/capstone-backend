import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import veganBakeryVallidator from "../Validators/veganBakeryValidator.js";

// Get all vegan bakeries
export const getAllVeganBakeries = async (req, res) => {
  try {
    const veganBakeries = await knex("veganbakery").select(
      "id",
      "name",
      "latitude",
      "longitude",
      "created_at",
      "updated_at"
    );

    res.status(200).json(veganBakeries);
  } catch (err) {
    console.error("Error fetching vegan bakeries:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// Get a single vegan bakery by ID
export const getVeganBakeryById = async (req, res) => {
  try {
    const veganBakery = await knex("veganbakery")
      .where("id", req.params.id)
      .first();

    if (veganBakery) {
      res.status(200).json(veganBakery);
    } else {
      res.status(404).json({
        message: "Vegan bakery not found",
      });
    }
  } catch (err) {
    console.error("Error fetching vegan bakery by ID:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// POST/CREATE a new vegan bakery
export const postNewVeganBakery = async (req, res) => {
  const validation = veganBakeryVallidator(req.body);

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
    const [newVeganBakery] = await knex("veganbakery")
      .insert({ name, latitude, longitude })
      .returning(["id", "name", "latitude", "longitude", "created_at"]);

    res.status(201).json({
      message: "Successfully added a new vegan bakery.",
      veganBakery: newVeganBakery,
    });
  } catch (error) {
    console.error("Error creating new vegan bakery:", error);
    res.status(500).json({
      message: "Error occurred while creating a new vegan bakery.",
      error: error.message,
    });
  }
};

// PUT/EDIT a vegan bakery
export const editVeganBakery = async (req, res) => {
  const validation = veganBakeryVallidator(req.body);

  if (!validation.valid) {
    return res.status(400).json({
      message: "Name, latitude, and longitude are required.",
    });
  }

  const { name, latitude, longitude } = req.body;

  try {
    const veganBakery = await knex("veganbakery")
      .where("id", req.params.id)
      .first();

    if (!veganBakery) {
      return res.status(404).json({ message: "Vegan bakery not found" });
    }

    await knex("veganbakery")
      .where("id", req.params.id)
      .update({ name, latitude, longitude });

    const updatedVeganBakery = await knex("veganbakery")
      .where("id", req.params.id)
      .first();

    res.status(200).json({
      message: "Successfully updated the vegan bakery.",
      veganBakery: updatedVeganBakery,
    });
  } catch (error) {
    console.error("Error updating vegan bakery:", error);
    res.status(500).json({
      message: "Error occurred while updating the vegan bakery.",
      error: error.message,
    });
  }
};

// DELETE a vegan bakery by ID
export const deleteVeganBakeryById = async (req, res) => {
  try {
    const deletedCount = await knex("veganbakery")
      .where("id", req.params.id)
      .delete();

    if (deletedCount === 0) {
      return res.status(404).json({
        message: `Vegan bakery with ID ${req.params.id} not found.`,
      });
    }

    res.status(204).json({
      message: `Vegan bakery with ID ${req.params.id} successfully deleted.`,
    });
  } catch (error) {
    console.error("Error deleting vegan bakery:", error);
    res.status(500).json({
      message: "Error occurred while deleting the vegan bakery.",
      error: error.message,
    });
  }
};
