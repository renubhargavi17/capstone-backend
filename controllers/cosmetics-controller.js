import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import veganCosmeticValidator from "../Validators/veganCosmeticValidator.js"

// Get all vegan cosmetics
export const getAllVeganCosmetics = async (req, res) => {
  try {
    const veganCosmetics = await knex("vegancosmetics").select(
      "id",
      "name",
      "latitude",
      "longitude",
      "created_at",
      "updated_at"
    );

    res.status(200).json(veganCosmetics);
  } catch (err) {
    console.error("Error fetching vegan cosmetics:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// Get a single vegan cosmetic by ID
export const getVeganCosmeticsById = async (req, res) => {
  try {
    const veganCosmetic = await knex("vegancosmetics")
      .where("id", req.params.id)
      .first();

    if (veganCosmetic) {
      res.status(200).json(veganCosmetic);
    } else {
      res.status(404).json({
        message: "Vegan cosmetic not found",
      });
    }
  } catch (err) {
    console.error("Error fetching vegan cosmetic by ID:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// POST/CREATE a new vegan cosmetic
export const postNewVeganCosmetics = async (req, res) => {
  const validation = veganCosmeticValidator(req.body);

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
    const [newVeganCosmetic] = await knex("vegancosmetics")
      .insert({ name, latitude, longitude })
      .returning(["id", "name", "latitude", "longitude", "created_at"]);

    res.status(201).json({
      message: "Successfully added a new vegan cosmetic.",
      veganCosmetic: newVeganCosmetic,
    });
  } catch (error) {
    console.error("Error creating new vegan cosmetic:", error);
    res.status(500).json({
      message: "Error occurred while creating a new vegan cosmetic.",
      error: error.message,
    });
  }
};

// PUT/EDIT a vegan cosmetic
export const editVeganCosmetics = async (req, res) => {
  const validation = veganCosmeticValidator(req.body);

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
    const veganCosmetic = await knex("vegancosmetics")
      .where("id", req.params.id)
      .first();

    if (!veganCosmetic) {
      return res.status(404).json({ message: "Vegan cosmetic not found" });
    }

    await knex("vegancosmetics")
      .where("id", req.params.id)
      .update({ name, latitude, longitude });

    const updatedVeganCosmetic = await knex("vegancosmetics")
      .where("id", req.params.id)
      .first();

    res.status(200).json({
      message: "Successfully updated the vegan cosmetic.",
      veganCosmetic: updatedVeganCosmetic,
    });
  } catch (error) {
    console.error("Error updating vegan cosmetic:", error);
    res.status(500).json({
      message: "Error occurred while updating the vegan cosmetic.",
      error: error.message,
    });
  }
};

// DELETE a vegan cosmetic by ID
export const deleteVeganCosmeticsById = async (req, res) => {
  try {
    const deletedCount = await knex("vegancosmetics")
      .where("id", req.params.id)
      .delete();

    if (deletedCount === 0) {
      return res.status(404).json({
        message: `Vegan cosmetic with ID ${req.params.id} not found.`,
      });
    }

    res.status(204).json({
      message: `Vegan cosmetic with ID ${req.params.id} successfully deleted.`,
    });
  } catch (error) {
    console.error("Error deleting vegan cosmetic:", error);
    res.status(500).json({
      message: "Error occurred while deleting the vegan cosmetic.",
      error: error.message,
    });
  }
};
