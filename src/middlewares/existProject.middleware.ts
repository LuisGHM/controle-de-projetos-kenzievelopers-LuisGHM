import { NextFunction, Request, Response } from "express";
import { ProjectsResult } from "../interfaces/projects.interfaces";
import { client } from "../database";
import AppError from "../errors/App.error";

export const existProjectMiddleware = async (req: Request, res:Response, next: NextFunction): Promise<void> => {
    const {id} = req.params;

    const query: string = "SELECT * FROM projects WHERE id = $1;";
    const queryResult: ProjectsResult = await client.query(query, [id]);

    if(!queryResult.rowCount){
        throw new AppError("Project not found.", 404);
    }

    return next();
}