import express from "express";

import { allTeam, oneTeam, updTeam, deleteTeam } from "../controllers/footContrl.js";

const teamRoutes = express.Router();

teamRoutes.get("/", allTeam);

teamRoutes.get("/:id", oneTeam);

teamRoutes.patch("/:id", updTeam);

teamRoutes.delete("/:id", deleteTeam);

export default teamRoutes;