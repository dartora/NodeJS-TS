import { createConnection } from 'typeorm'
import { config as configDotenv } from 'dotenv'
import { app } from './app'

configDotenv()

const port = parseInt(process.env.PORT)

const run = async () => {
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "typescript-crud",
    })
    await app(port)
}

run()