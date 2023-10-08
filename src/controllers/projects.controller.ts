import { Request, Response } from "express";
import { Projects } from "../interfaces/projects.interfaces";
import { createProjectService, getProjectsService } from "../services/projects.service";

export const createProjectController = async (req: Request, res: Response): Promise<Response> => {
    const project: Projects = await createProjectService(req.body);
    
    return res.status(201).json(project);
}

export const getProjectsController = async (req: Request, res: Response): Promise<Response> => {
    const project: Projects = await getProjectsService(+req.params.id);

    return res.status(200).json(project);
}