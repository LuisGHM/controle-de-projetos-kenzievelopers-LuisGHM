import format from "pg-format";
import { Projects, ProjectsCreate, ProjectsResult } from "../interfaces/projects.interfaces";
import { client } from "../database";

export const createProjectService = async (data: ProjectsCreate): Promise<Projects> => {
    const queryFormat: string = format("INSERT INTO projects (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data)); 

    const queryResult: ProjectsResult = await client.query(queryFormat);
    
    return queryResult.rows[0];
}

export const getProjectsService = async(Id: number): Promise<Projects> => {
    const query: string = `
    SELECT p.id "projectId", 
    p.name "projectName", 
    p.description "projectDescription", 
    p.repository "projectRepository", 
    p."startDate" "projectStartDate", 
    p."endDate" "projectEndDate", 
    d.name "projectDeveloperName" 
    FROM projects p 
    INNER JOIN developers d  ON d.id = p."developerId" WHERE p.id = $1;`;

    const queryResult: ProjectsResult = await client.query(query, [Id]);

    return queryResult.rows[0];
}