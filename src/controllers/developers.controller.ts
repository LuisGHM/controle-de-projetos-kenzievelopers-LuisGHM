import { Request, Response } from "express";
import { Developers } from "../interfaces/developers.interface";
import { createDevelopersService } from "../services/developers.service";

export const createDevelopersController = async (req: Request, res: Response): Promise<Response> => {
    const developers: Developers = await createDevelopersService(req.body);
    
    return res.status(201).json(developers);
}

/* export const getDevelopersController = async (req: Request, res: Response): Promise<Response> => {
    
    
    return res.status()
}  */