import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import groceryStoreValidator from "../Validators/groceryStoreValidator.js"

// Get all grocery stores
export const getAllGroceryStores = async (req, res) => {
  try {
    const groceryStores = await knex("grocerystores").select(
      "id",
      "name",
      "latitude",
      "longitude",
      "created_at",
      "updated_at"
    );

    res.status(200).json(groceryStores);
  } catch (err) {
    console.error("Error fetching grocery stores:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// Get a single grocery store by ID
export const getGroceryStoreById = async (req, res) => {
  try {
    const groceryStore = await knex("grocerystores")
      .where("id", req.params.id)
      .first();

    if (groceryStore) {
      res.status(200).json(groceryStore);
    } else {
      res.status(404).json({
        message: "Grocery store not found",
      });
    }
  } catch (err) {
    console.error("Error fetching grocery store by ID:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// POST/CREATE a new grocery store
export const postNewGroceryStore = async (req, res) => {
  const validation = groceryStoreValidator(req.body);

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
    const [newGroceryStore] = await knex("grocerystores")
      .insert({ name, latitude, longitude })
      .returning(["id", "name", "latitude", "longitude", "created_at"]);

    res.status(201).json({
      message: "Successfully added a new grocery store.",
      groceryStore: newGroceryStore,
    });
  } catch (error) {
    console.error("Error creating new grocery store:", error);
    res.status(500).json({
      message: "Error occurred while creating a new grocery store.",
      error: error.message,
    });
  }
};

// PUT/EDIT a grocery store
export const editGroceryStore = async (req, res) => {
  const validation = groceryStoreValidator(req.body);

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
    const groceryStore = await knex("grocerystores")
      .where("id", req.params.id)
      .first();

    if (!groceryStore) {
      return res.status(404).json({ message: "Grocery store not found" });
    }

    await knex("grocerystores")
      .where("id", req.params.id)
      .update({ name, latitude, longitude });

    const updatedGroceryStore = await knex("grocerystores")
      .where("id", req.params.id)
      .first();

    res.status(200).json({
      message: "Successfully updated the grocery store.",
      groceryStore: updatedGroceryStore,
    });
  } catch (error) {
    console.error("Error updating grocery store:", error);
    res.status(500).json({
      message: "Error occurred while updating the grocery store.",
      error: error.message,
    });
  }
};

// DELETE a grocery store by ID
export const deleteGroceryStoreById = async (req, res) => {
  try {
    const deletedCount = await knex("grocerystores")
      .where("id", req.params.id)
      .delete();

    if (deletedCount === 0) {
      return res.status(404).json({
        message: `Grocery store with ID ${req.params.id} not found.`,
      });
    }

    res.status(204).json({
      message: `Grocery store with ID ${req.params.id} successfully deleted.`,
    });
  } catch (error) {
    console.error("Error deleting grocery store:", error);
    res.status(500).json({
      message: "Error occurred while deleting the grocery store.",
      error: error.message,
    });
  }
};
