import format from "pg-format";
import { CreateDevelopers, Developers, DevelopersResult } from "../interfaces/developers.interface";
import { client } from "../database";

export const createDevelopersService = async (data: CreateDevelopers): Promise<Developers> => {
    const queryFormat: string = format("INSERT INTO developers (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));

    const queryResult: DevelopersResult = await client.query(queryFormat);

    return queryResult.rows[0];
}