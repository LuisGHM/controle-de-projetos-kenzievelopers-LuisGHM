import { Request, Response } from "express";
import { Developers } from "../interfaces/developers.interface";
import { createDevelopersService, deleteDevelopersService, getDevelopersInfoService, patchDevelopersService, postDevelopersInfoService } from "../services/developers.service";
import { developersInfoPlusDevelopers } from "../interfaces/developersInfoPlusDevelopers.interface";
import { developersInfo } from "../interfaces/developersInfo.interface";

export const createDevelopersController = async (req: Request, res: Response): Promise<Response> => {
    const developers: Developers = await createDevelopersService(req.body);
    
    return res.status(201).json(developers);
}

export const getDevelopersInfoController = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    
    const developersInfoPlusDevelopers: developersInfoPlusDevelopers = await getDevelopersInfoService(+id);

    return res.status(200).json(developersInfoPlusDevelopers);
}

export const patchDevelopersController = async (req: Request, res: Response): Promise<Response> =>{
    const {id} = req.params;  

    const developers: Developers = await patchDevelopersService(+id, req.body);

    return res.status(200).json(developers);
}

export const deleteDevelopersController = async (req: Request, res: Response): Promise<Response> =>{
    const {id} = req.params;
    
    await deleteDevelopersService(+id);

    return res.status(204).json();
}

export const postDevelopersInfoController = async (req: Request, res: Response): Promise<Response> =>{
    const {id} = req.params;

    const developersInfo: developersInfo = await postDevelopersInfoService(+id, req.body);

    return res.status(201).json(developersInfo);
}