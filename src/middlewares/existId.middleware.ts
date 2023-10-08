import { NextFunction, Request, Response } from "express";
import { DevelopersResult } from "../interfaces/developers.interface";
import { client } from "../database";
import AppError from "../errors/App.error";

export const existIdMiddleware = async (req: Request, res:Response, next: NextFunction): Promise<void> => {
    let id;

    if(req.body.developerId == undefined){
        id = req.params.id;
    } else {
        id = req.body.developerId;
    }
    
    const query: string = "SELECT * FROM developers WHERE id = $1;";
    const queryResult:DevelopersResult = await client.query(query, [id]); 
    

    if(!queryResult.rowCount){
        throw new AppError("Developer not found.", 404);
    }

    return next();
}