import { Response, Request } from "express";

import {
    setClassOfStudant,
    getStudantByStudantId
} from '../repository/studants'
import { 
    setClassOfTeacher,
    getTeacherByTeacherId
} from "../repository/teachers";
import { Studant, Teacher } from "../types";

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
export const addStudantAtClass = async (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        const studantId: number = Number(req.body.studandId)

        const idClass: number = Number(req.params.idClass)

        if(idClass===undefined || isNaN(idClass)) { 
            res.statusCode = 422
            throw new Error("Incorrect format. Id should be a number")
        }

        const studant:(Studant|null) = await getStudantByStudantId(studantId)

        if(!studant) {
            res.statusCode = 404
            throw new Error("Does not exists")
        }

        if(studant.classId!==undefined || studant.classId!==null) { 
            res.statusCode = 401
            throw new Error("Class already exists")
        }

        studant.classId = idClass;
        setClassOfStudant(studant)

        res.status(200).send("Successfully added")
        

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
export const addTeacherAtClass = async (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        const teacherId: number = Number(req.body.teacherId)
        const idClass: number = Number(req.params.idClass)

        if(idClass===undefined || isNaN(idClass)) { 
            res.statusCode = 422
            throw new Error("Incorrect format. idClass should be a number")
        }
        else if(teacherId===undefined || isNaN(teacherId)) { 
            res.statusCode = 422
            throw new Error("Incorrect format. studantId should be a number")
        }

        const teacher:(Teacher|null) = await getTeacherByTeacherId(teacherId)

        if(!teacher) {
            res.statusCode = 404
            throw new Error("Does not exists")
        }

        if(teacher.classId!==undefined || teacher.classId!==null) { 
            res.statusCode = 401
            throw new Error("Class already exists")
        }

        teacher.classId = idClass;
        await setClassOfTeacher(teacher)

        res.status(200).send("Successfully added")
        console.log(teacher)

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}