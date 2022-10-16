import { Request, Response } from 'express'
import { Repository } from 'typeorm'

export const recordsController = <T>(repository: Repository<T>) => {
    const findAll = async (req: Request, res: Response) => {
        //return all records
        const results = await repository.find()
        res.send(results)
    }

    const findOne = async (req: Request, res: Response) => {
        //return one record by id
        const results = await repository.findOne(req.params)
        return res.send(results)
    }

    const create = async (req: Request, res: Response) => {
        //create a new record
        const record = repository.create(req.body)
        const results = await repository.save(record)
        return res.send(results)
    }

    const update = async (req: Request, res: Response) => {
        //update a record by a given id
        const record = await repository.findOne(req.params)
        repository.merge(record, req.body)
        const results = await repository.save(record)
        return res.send(results)
    }

    const remove = async (req: Request, res: Response) => {
        //delete a record by a give id
        const results = await repository.delete(req.params.id)
        return res.send(results)
    }

    return { findAll, findOne, create, update, remove }
}