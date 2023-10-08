import { Router } from "express";
import { createProjectController, getProjectsController } from "../controllers/projects.controller";
import { existIdMiddleware } from "../middlewares/existId.middleware";
import { existProjectMiddleware } from "../middlewares/existProject.middleware";

export const projectsRoute: Router = Router();

projectsRoute.post("/", existIdMiddleware, createProjectController);
projectsRoute.get("/:id", existProjectMiddleware, getProjectsController);
projectsRoute.patch("/:id");