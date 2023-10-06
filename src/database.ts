import { Client, ClientConfig } from 'pg'
import { promises } from 'graceful-fs';

const databaseConfig = (): ClientConfig => {
    if (process.env.NODE_ENV === 'test') {
        console.log("entrou");
        
        return {
            user: process.env.DB_TEST_USER!,
            password: process.env.DB_TEST_PASSWORD!,
            database: process.env.DB_TEST!,
            host: process.env.DB_TEST_HOST!,
            port: Number(process.env.DB_TEST_PORT!),
        }
    }
    console.log("não entrou");
    return {
        user: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB!,
        host: process.env.DB_HOST!,
        port: Number(process.env.DB_PORT!),
    }
}
const client: Client = new Client(databaseConfig())

const startDatabase = async (): Promise<void> => { 
    console.log(databaseConfig());
    await client.connect()
    console.log('Database connected.')
}

export { client, startDatabase }
