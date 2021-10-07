import { Response, Request } from "express";

/**
 POST
 /class
 */
export const createClass = (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        //Funcionalidade aqui

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}

/**
 POST
 '/class/:idClass/addStudant'

 req.params.idClass
 dados do teacher por body
 */
export const addStudantAtClass = (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        //Funcionalidade aqui

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}

/** 
 POST
 '/class/:idClass/addTeacher'

  req.params.idClass
  dados do studant por body
 */
export const addTeacherAtClass = (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        //Funcionalidade aqui

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}