import { Response, Request } from "express";
import { createTeacher } from '../repository/teachers'
import { Teacher } from "../types";

/**
 POST
 '/teacher'
 */
export const createTeacherController = async (req: Request, res: Response) => {
    try {
        res.statusCode = 400

        const id: number = Number(req.body.id);
        const name: string = req.body.name;
        const email: string = req.body.email;
        const birthDate: Date = new Date(req.body.birthDate);
    
        if (!id || isNaN(id)) throw new Error("Missing id or incorrect format");
        else if (!name) throw new Error("Missing name");
        else if (!email) throw new Error("Missing email");
        else if (!birthDate) throw new Error("Missing birthDate");
    
        const teacher: Teacher = {
          id: id,
          email: email,
          birthDate: birthDate,
          name: name,
        };
    
        await createTeacher(teacher);
    
        res.status(201).end()

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}
