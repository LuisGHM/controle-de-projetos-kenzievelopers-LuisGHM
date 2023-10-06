import format from "pg-format";
import { CreateDevelopers, DeveloperUpdate, Developers, DevelopersResult } from "../interfaces/developers.interface";
import { client } from "../database";
import { developersInfoPlusDevelopers, DevelopersInfoPlusDevelopersResult } from "../interfaces/developersInfoPlusDevelopers.interface";
import { CreateDevolopersInfo, DevelopersInfoResult, developersInfo } from "../interfaces/developersInfo.interface";

export const createDevelopersService = async (data: CreateDevelopers): Promise<Developers> => {
    const queryFormat: string = format("INSERT INTO developers (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));

    const queryResult: DevelopersResult = await client.query(queryFormat);
    
    return queryResult.rows[0];
}

export const getDevelopersInfoService = async (id: number): Promise<developersInfoPlusDevelopers> =>{
    const query: string = `
        SELECT d.id "developerId", d.name "developerName", d.email "developerEmail", di."developerSince" "developerInfoDeveloperSince", di."preferredOS" "developerInfoPreferredOS" 
            FROM developers d LEFT JOIN "developerInfos" di ON d.id = di."developerId" WHERE d.id = $1;;`;
    const queryResult: DevelopersInfoPlusDevelopersResult = await client.query(query, [id]);
    
    return queryResult.rows[0];
}

export const patchDevelopersService = async (id: number, data: DeveloperUpdate): Promise<Developers> => {
    const queryFormat: string = format("UPDATE developers SET (%I) = ROW (%L) WHERE id = $1 RETURNING *;", Object.keys(data), Object.values(data));

    const queryResult: DevelopersResult = await client.query(queryFormat, [id]);

    return queryResult.rows[0];
}

export const deleteDevelopersService = async (id: number): Promise<void> => { 
    const query: string = "DELETE FROM developers WHERE id = $1";

    await client.query(query, [id]);
}

export const postDevelopersInfoService = async (id: number, data: CreateDevolopersInfo): Promise<developersInfo> =>{
    const query: string = `INSERT INTO "developerInfos" ("developerSince", "preferredOS", "developerId") VALUES ($1, $2, $3)  RETURNING *;`;
    
    const queryResult: DevelopersInfoResult = await client.query(query, [data.developerSince, data.preferredOS, id]);
    
    return queryResult.rows[0];
}