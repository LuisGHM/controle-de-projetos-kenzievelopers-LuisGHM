import "express-async-errors";
import "dotenv/config";
import express, { Application } from "express";
import { handlesErrors } from "./middlewares/handleError.middleware";

const app: Application = express();

app.use(express.json());

app.use(handlesErrors);

export default app;
