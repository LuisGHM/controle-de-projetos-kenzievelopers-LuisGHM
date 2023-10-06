import { QueryResult } from "pg"

export type developersInfoPlusDevelopers = {
    developerId: number,
    developerName: string,
    developerEmail: string,
    developerInfoDeveloperSince: Date | null,
    developerInfoPreferredOS: string | null
}

export type DevelopersInfoPlusDevelopersResult = QueryResult<developersInfoPlusDevelopers>