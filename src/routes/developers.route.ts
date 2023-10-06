import { Router } from "express";
import { createDevelopersController } from "../controllers/developers.controller";
import { noRepeatEmailMiddleware } from "../middlewares/noRepeatEmail.middleware";

export const developersRoute: Router = Router();

developersRoute.post("/", noRepeatEmailMiddleware, createDevelopersController);
developersRoute.get("/:id");
developersRoute.patch("/:id");
developersRoute.delete("/:id");
developersRoute.post("/id/infos");