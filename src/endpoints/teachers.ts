import { Response, Request } from "express";

/**
 POST
 '/teacher'
 */
export const createTeacher = (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        //Funcionalidade aqui

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}
