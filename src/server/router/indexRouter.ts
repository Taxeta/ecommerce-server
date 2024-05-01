import express from "express";
import paths from "../controllers/paths/paths.js";
import { pingController } from "../controllers/pingController/pingController.js";

const app = express();

app.use(express.json());

app.get(paths.rootPath, pingController);

export default app;
