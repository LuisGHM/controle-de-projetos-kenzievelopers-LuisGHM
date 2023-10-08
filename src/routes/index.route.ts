import { Router } from "express";
import { developersRoute } from "./developers.route";
import { projectsRoute } from "./project.route";

export const routes: Router = Router();

routes.use("/developers", developersRoute);

routes.use("/projects", projectsRoute);