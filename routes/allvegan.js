import express from "express";
import {
  getAllVegan
} from "../controllers/search-controller.js";

const veganRoute = express.Router();

veganRoute.get("/", getAllVegan);

export default veganRoute;
