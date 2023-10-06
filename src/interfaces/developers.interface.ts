import { QueryResult } from "pg"

export type Developers = {
    id: number,
    name: string,
    email: string
}

export type CreateDevelopers = Omit<Developers, "id">

export type DevelopersResult = QueryResult<Developers>