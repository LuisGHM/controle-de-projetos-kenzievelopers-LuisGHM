import format from "pg-format";
import { CreateDevelopers, DeveloperUpdate, Developers, DevelopersResult } from "../interfaces/developers.interface";
import { client } from "../database";
import { DevelopersInfo, DevelopersInfoResult } from "../interfaces/developersInfoPlusDevelopers.interface";

export const createDevelopersService = async (data: CreateDevelopers): Promise<Developers> => {
    const queryFormat: string = format("INSERT INTO developers (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));

    const queryResult: DevelopersResult = await client.query(queryFormat);
    
    return queryResult.rows[0];
}

export const getDevelopersInfoService = async (id: number): Promise<DevelopersInfo> =>{
    const query: string = `
        SELECT d.id "developerId", d.name "developerName", d.email "developerEmail", di."developerSince" "developerInfoDeveloperSince", di."preferredOS" "developerInfoPreferredOS" 
            FROM developers d LEFT JOIN "developerInfos" di ON d.id = di."developerId" WHERE d.id = $1;;`;
    const queryResult: DevelopersInfoResult = await client.query(query, [id]);
    
    return queryResult.rows[0];
}

export const patchDevelopersService = async (id: number, data: DeveloperUpdate): Promise<Developers> => {
    const queryFormat: string = format("UPDATE developers SET (%I) = ROW (%L) WHERE id = $1 RETURNING *;", Object.keys(data), Object.values(data));

    const queryResult: DevelopersResult = await client.query(queryFormat, [id]);

    return queryResult.rows[0];
}


