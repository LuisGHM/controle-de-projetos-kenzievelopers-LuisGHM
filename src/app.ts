import "express-async-errors";
import express, { Application } from "express";
import { routes } from "./routes/index.route";
import { handlesErrors } from "./middlewares/handleError.middleware";

export const app: Application = express();

app.use(express.json());

app.use("/", routes);

app.use(handlesErrors);