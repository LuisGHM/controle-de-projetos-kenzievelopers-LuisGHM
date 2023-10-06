import { Router } from "express";
import { developersRoute } from "./developers.route";

export const routes: Router = Router();

routes.use("/developers", developersRoute);