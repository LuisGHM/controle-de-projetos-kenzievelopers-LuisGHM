import { Router } from "express";
import { createDevelopersController, deleteDevelopersController, getDevelopersInfoController, patchDevelopersController, postDevelopersInfoController } from "../controllers/developers.controller";
import { noRepeatEmailMiddleware } from "../middlewares/noRepeatEmail.middleware";
import { existIdMiddleware } from "../middlewares/existId.middleware";
import { existDevelopersMiddleware } from "../middlewares/existDeveloper.middleware";
import { preferredOSValidation } from "../middlewares/preferredOSValidate.middleware";

export const developersRoute: Router = Router();

developersRoute.post("/", noRepeatEmailMiddleware, createDevelopersController);
developersRoute.get("/:id", existIdMiddleware, getDevelopersInfoController);
developersRoute.patch("/:id", existIdMiddleware, noRepeatEmailMiddleware, patchDevelopersController);
developersRoute.delete("/:id", existIdMiddleware, deleteDevelopersController);
developersRoute.post("/:id/infos", existDevelopersMiddleware, preferredOSValidation, existIdMiddleware, postDevelopersInfoController);