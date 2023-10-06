import { QueryResult } from "pg"

export type developersInfo = {
    id: number,
    developerSince: Date,
    preferredOS: string,
    developerId: number
}

export type CreateDevolopersInfo = Omit<developersInfo, "id">

export type DevelopersInfoResult = QueryResult<developersInfo>