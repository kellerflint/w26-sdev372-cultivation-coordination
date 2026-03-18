import express from "express";
import { getPlots } from "../controllers/getPlots.js";
import { savePlot } from "../controllers/savePlot.js";

const router = express.Router();


router.get("/api/plots", getPlots);

router.post("/api/plots", savePlot);

export default router;