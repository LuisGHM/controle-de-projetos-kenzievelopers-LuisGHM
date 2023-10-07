import { NextFunction, Request, Response } from "express";
import { DevelopersInfoResult } from "../interfaces/developersInfo.interface";
import { client } from "../database";
import AppError from "../errors/App.error";

export const existDevelopersMiddleware = async (req: Request, res:Response, next: NextFunction): Promise<void> =>{
    const {id} = req.params;

    const query: string = `SELECT * FROM "developerInfos" WHERE "developerId" = $1;`;
    const queryResult:DevelopersInfoResult = await client.query(query, [id]);
    
    if(queryResult.rowCount){
        throw new AppError("Developer infos already exists.", 409);
    }

    return next();
}