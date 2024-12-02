import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

export const getAllVegan = async (req, res) => {
  try {
    const allVegan = await knex
      .select("name")
      .from(function () {
        this.unionAll([
          knex("veganbakery").select("name"),
          knex("vegancafe").select("name"),
          knex("veganclothing").select("name"),
          knex("vegancosmetics").select("name"),
          knex("grocerystores").select("name"),
          knex("veganrestaurant").select("name"),
        ]).as("allVegan");
      });

    res.json(allVegan);
  } catch (err) {
    console.error("Error fetching vegan items:", err);
    res.status(500).json({
      message: "Error occurred",
      error: err.message,
      status: 500,
    });
  }
};
