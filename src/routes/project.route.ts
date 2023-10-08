import { Router } from "express";
import { createProjectController } from "../controllers/projects.controller";

export const projectsRoute: Router = Router();

projectsRoute.post("/", createProjectController);
projectsRoute.get("/:id");
projectsRoute.patch("/:id");