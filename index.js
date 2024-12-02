import express from "express";
import groceryStoreRoute from "./routes/grocerystore.js";
import veganBakeryRoute from "./routes/veganbakery.js";
import veganCafeRoute from "./routes/vegancafe.js";
import veganClothingRoute from "./routes/veganclothing.js";
import veganCosmeticsRoute from "./routes/vegancosmetics.js";
import veganRestarauntsRoute from "./routes/veganrestaraunts.js";
import getAllVegan from "./routes/allvegan.js"
import cors from "cors";

const app = express();
const { PORT = 5050, CORS_ORIGIN = "http://localhost:5173" } = process.env;

const corsOptions = {
  origin: CORS_ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/grocerystore", groceryStoreRoute);
app.use("/veganbakery", veganBakeryRoute);
app.use("/vegancafe", veganCafeRoute);
app.use("/veganclothing", veganClothingRoute);
app.use("/vegancosmetics", veganCosmeticsRoute);
app.use("/veganrestaurant", veganRestarauntsRoute);
app.use("/allvegan", getAllVegan);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Find Vegan Backend! 🕊️ </h1>");
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));