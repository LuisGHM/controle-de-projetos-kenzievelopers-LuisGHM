import { QueryResult } from "pg"

export type DevelopersInfo = {
    developerId: number,
    developerName: string,
    developerEmail: string,
    developerInfoDeveloperSince: Date | null,
    developerInfoPreferredOS: string | null
}

export type DevelopersInfoResult = QueryResult<DevelopersInfo>