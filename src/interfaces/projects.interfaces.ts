import { QueryResult } from "pg"

export type Projects = {
    id: number,
    name: string,
    description: string,
    repository: string,
    startDate: Date,
    endDate: Date | null,
    developerId: number | null
}

export type ProjectsCreate = Omit<Projects, "id">

export type ProjectsUpdate = Partial<Projects>

export type ProjectsResult = QueryResult<Projects>