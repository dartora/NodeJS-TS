import express from 'express'
import cors from 'cors'
import { articlesRoutes } from './routes/articles'

export const app = async (port: number) => {
    const app = express()
    app.use(express.json())
    app.use(cors())
    app.set('trust proxy', 1) //required for heroku

    const router = express.Router()
    app.use(articlesRoutes(router))

    //start express server
    console.log(port)
    app.listen(port)
}