import { Response, Request } from "express";

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
export const getStudantAgeByStudantId = (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        //Funcionalidade aqui

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}