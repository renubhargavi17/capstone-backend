import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import veganCafeValidator from "../Validators/veganCafeValidator.js"

// Get all vegan cafes
export const getAllVeganCafes = async (req, res) => {
  try {
    const veganCafes = await knex("vegancafe").select(
      "id",
      "name",
      "latitude",
      "longitude",
      "created_at",
      "updated_at"
    );

    res.status(200).json(veganCafes);
  } catch (err) {
    console.error("Error fetching vegan cafes:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// Get a single vegan cafe by ID
export const getVeganCafeById = async (req, res) => {
  try {
    const veganCafe = await knex("vegancafe")
      .where("id", req.params.id)
      .first();

    if (veganCafe) {
      res.status(200).json(veganCafe);
    } else {
      res.status(404).json({
        message: "Vegan cafe not found",
      });
    }
  } catch (err) {
    console.error("Error fetching vegan cafe by ID:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
    });
  }
};

// POST/CREATE a new vegan cafe
export const postNewVeganCafe = async (req, res) => {
  const validation = veganCafeValidator(req.body);

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
    const [newVeganCafe] = await knex("vegancafe")
      .insert({ name, latitude, longitude })
      .returning(["id", "name", "latitude", "longitude", "created_at"]);

    res.status(201).json({
      message: "Successfully added a new vegan cafe.",
      veganCafe: newVeganCafe,
    });
  } catch (error) {
    console.error("Error creating new vegan cafe:", error);
    res.status(500).json({
      message: "Error occurred while creating a new vegan cafe.",
      error: error.message,
    });
  }
};

// PUT/EDIT a vegan cafe
export const editVeganCafe = async (req, res) => {
  const validation = veganCafeValidator(req.body);

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
    const veganCafe = await knex("vegancafe")
      .where("id", req.params.id)
      .first();

    if (!veganCafe) {
      return res.status(404).json({ message: "Vegan cafe not found" });
    }

    await knex("vegancafe")
      .where("id", req.params.id)
      .update({ name, latitude, longitude });

    const updatedVeganCafe = await knex("vegancafe")
      .where("id", req.params.id)
      .first();

    res.status(200).json({
      message: "Successfully updated the vegan cafe.",
      veganCafe: updatedVeganCafe,
    });
  } catch (error) {
    console.error("Error updating vegan cafe:", error);
    res.status(500).json({
      message: "Error occurred while updating the vegan cafe.",
      error: error.message,
    });
  }
};

// DELETE a vegan cafe by ID
export const deleteVeganCafeById = async (req, res) => {
  try {
    const deletedCount = await knex("vegancafe")
      .where("id", req.params.id)
      .delete();

    if (deletedCount === 0) {
      return res.status(404).json({
        message: `Vegan cafe with ID ${req.params.id} not found.`,
      });
    }

    res.status(204).json({
      message: `Vegan cafe with ID ${req.params.id} successfully deleted.`,
    });
  } catch (error) {
    console.error("Error deleting vegan cafe:", error);
    res.status(500).json({
      message: "Error occurred while deleting the vegan cafe.",
      error: error.message,
    });
  }
};
