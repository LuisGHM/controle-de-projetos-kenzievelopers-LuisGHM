import { Router } from "express";
import { createDevelopersController, getDevelopersInfoController } from "../controllers/developers.controller";
import { noRepeatEmailMiddleware } from "../middlewares/noRepeatEmail.middleware";
import { existId } from "../middlewares/existId.middleware";

export const developersRoute: Router = Router();

developersRoute.post("/", noRepeatEmailMiddleware, createDevelopersController);
developersRoute.get("/:id", existId, getDevelopersInfoController);
developersRoute.patch("/:id");
developersRoute.delete("/:id");
developersRoute.post("/id/infos");