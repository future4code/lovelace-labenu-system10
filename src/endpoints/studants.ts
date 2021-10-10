import { Response, Request } from "express";
import {
    createStydant,
    setClassOfStudant,
    getStudantByStudantId
} from '../repository/studants'
import { Studant } from "../types";

/**
 POST
 '/studant'
 */
export const createStudant = (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        //Funcionalidade aqui

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}

/**
 GET
 '/studant/:id'
 */
export const getStudantAgeByStudantId = async (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        const studantId: number = Number(req.params.id)

        if(!studantId || isNaN(studantId)){
            res.statusCode = 422
            throw new Error('Incorrect format. Id should be a number')
        }
        
        const studant: (Studant|null) = await getStudantByStudantId(studantId)

        if(!studant)
            return res.status(404).send('Does not exists')

        const ageMiliSec: number = (Date.now() - studant.birthDate.getMilliseconds())

        return res.status(200).send({age: ageMiliSec})


    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}