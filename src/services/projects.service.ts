import format from "pg-format";
import { Projects, ProjectsCreate, ProjectsResult } from "../interfaces/projects.interfaces";
import { client } from "../database";

export const createProjectService = async (data: ProjectsCreate): Promise<Projects> => {
    const queryFormat: string = format("INSERT INTO projects (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));

    console.log(Object.keys(data));
    console.log(Object.values(data));
    

    const queryResult: ProjectsResult = await client.query(queryFormat);
    
    return queryResult.rows[0];
}