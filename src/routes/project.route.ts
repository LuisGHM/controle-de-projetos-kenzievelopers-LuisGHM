import { NextFunction, Request, Response, Router, request } from "express";
import { createProjectController, getProjectsController, patchProjectsController } from "../controllers/projects.controller";
import { existIdMiddleware } from "../middlewares/existId.middleware";
import { existProjectMiddleware } from "../middlewares/existProject.middleware";
import { app } from "../app";
import { handlesErrors } from "../middlewares/handleError.middleware";

export const projectsRoute: Router = Router();

projectsRoute.post("/", existIdMiddleware, createProjectController);
projectsRoute.get("/:id", existProjectMiddleware, getProjectsController);
projectsRoute.patch("/:id", existProjectMiddleware, async (req, res, next) => {
    const oldId = req.params.id;
    console.log(oldId);
    const id = req.body.developerId;
    req.params.id = id;

    // Faça uma cópia real de oldId e atribua-a de volta a req.params.id
    Object.assign(req.params, { id: oldId });

    console.log(req.params.id);
    next();
}, patchProjectsController);