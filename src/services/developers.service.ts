import format from "pg-format";
import { CreateDevelopers, Developers, DevelopersResult } from "../interfaces/developers.interface";
import { client } from "../database";
import { DevelopersInfo, DevelopersInfoResult } from "../interfaces/developersInfo.interface";

export const createDevelopersService = async (data: CreateDevelopers): Promise<Developers> => {
    const queryFormat: string = format("INSERT INTO developers (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));

    const queryResult: DevelopersResult = await client.query(queryFormat);
    
    return queryResult.rows[0];
}

export const getDevelopersInfoService = async (data: number): Promise<DevelopersInfo> =>{
    const query: string = `
        SELECT d.id "developerId", d.name "developerName", d.email "developerEmail", di."developerSince" "developerInfoDeveloperSince", di."preferredOS" "developerInfoPreferredOS" 
            FROM developers d LEFT JOIN "developerInfos" di ON d.id = di."developerId" WHERE d.id = $1;;`;
    const queryResult: DevelopersInfoResult = await client.query(query, [data]);
    
    return queryResult.rows[0];
} 