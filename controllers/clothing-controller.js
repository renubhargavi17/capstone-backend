import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import veganClothingValidator from "../Validators/veganClothingValidator.js"

// Get all vegan clothing stores
export const getAllVeganClothing = async (req, res) => {
  try {
    const veganClothingStores = await knex("veganclothing").select(
      "id",
      "name",
      "latitude",
      "longitude",
      "created_at",
      "updated_at"
    );

    res.status(200).json(veganClothingStores);
  } catch (err) {
    console.error("Error fetching vegan clothing stores:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// Get a single vegan clothing store by ID
export const getVeganClothingById = async (req, res) => {
  try {
    const veganClothing = await knex("veganclothing")
      .where("id", req.params.id)
      .first();

    if (veganClothing) {
      res.status(200).json(veganClothing);
    } else {
      res.status(404).json({
        message: "Vegan clothing store not found",
      });
    }
  } catch (err) {
    console.error("Error fetching vegan clothing by ID:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// POST/CREATE a new vegan clothing store
export const postNewVeganClothing = async (req, res) => {
  const validation = veganClothingValidator(req.body);

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
    const [newVeganClothingStore] = await knex("veganclothing")
      .insert({ name, latitude, longitude })
      .returning(["id", "name", "latitude", "longitude", "created_at"]);

    res.status(201).json({
      message: "Successfully added a new vegan clothing store.",
      veganClothing: newVeganClothingStore,
    });
  } catch (error) {
    console.error("Error creating new vegan clothing store:", error);
    res.status(500).json({
      message: "Error occurred while creating a new vegan clothing store.",
      error: error.message,
    });
  }
};

// PUT/EDIT a vegan clothing store
export const editVeganClothing = async (req, res) => {
  const validation = veganClothingValidator(req.body);

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
    const veganClothing = await knex("veganclothing")
      .where("id", req.params.id)
      .first();

    if (!veganClothing) {
      return res.status(404).json({ message: "Vegan clothing store not found" });
    }

    await knex("veganclothing")
      .where("id", req.params.id)
      .update({ name, latitude, longitude });

    const updatedVeganClothing = await knex("veganclothing")
      .where("id", req.params.id)
      .first();

    res.status(200).json({
      message: "Successfully updated the vegan clothing store.",
      veganClothing: updatedVeganClothing,
    });
  } catch (error) {
    console.error("Error updating vegan clothing store:", error);
    res.status(500).json({
      message: "Error occurred while updating the vegan clothing store.",
      error: error.message,
    });
  }
};

// DELETE a vegan clothing store by ID
export const deleteVeganClothingById = async (req, res) => {
  try {
    const deletedCount = await knex("veganclothing")
      .where("id", req.params.id)
      .delete();

    if (deletedCount === 0) {
      return res.status(404).json({
        message: `Vegan clothing store with ID ${req.params.id} not found.`,
      });
    }

    res.status(204).json({
      message: `Vegan clothing store with ID ${req.params.id} successfully deleted.`,
    });
  } catch (error) {
    console.error("Error deleting vegan clothing store:", error);
    res.status(500).json({
      message: "Error occurred while deleting the vegan clothing store.",
      error: error.message,
    });
  }
};
