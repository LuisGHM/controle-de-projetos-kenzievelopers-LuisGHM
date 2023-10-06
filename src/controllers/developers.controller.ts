import { Request, Response } from "express";
import { Developers } from "../interfaces/developers.interface";
import { createDevelopersService, deleteDevelopersService, getDevelopersInfoService, patchDevelopersService } from "../services/developers.service";
import { DevelopersInfo } from "../interfaces/developersInfoPlusDevelopers.interface";

export const createDevelopersController = async (req: Request, res: Response): Promise<Response> => {
    const developers: Developers = await createDevelopersService(req.body);
    
    return res.status(201).json(developers);
}

export const getDevelopersInfoController = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    
    const developersInfo: DevelopersInfo = await getDevelopersInfoService(+id);

    return res.status(200).json(developersInfo);
}

export const patchDevelopersController = async (req: Request, res: Response): Promise<Response> =>{
    const {id} = req.params;

    const developers: Developers = await patchDevelopersService(+id, req.body);

    return res.status(200).json(developers);
}



