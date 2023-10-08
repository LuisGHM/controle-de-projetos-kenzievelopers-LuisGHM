import { Request, Response } from "express";
import { Projects } from "../interfaces/projects.interfaces";
import { createProjectService } from "../services/projects.service";

export const createProjectController = async (req: Request, res: Response): Promise<Response> => {
    const developers: Projects = await createProjectService(req.body);
    
    return res.status(201).json(developers);
}