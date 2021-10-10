import { Response, Request } from "express";
import { createStydant, getStudantByStudantId } from "../repository/studants";
import { Studant } from "../types";

/**
 POST
 '/studant'
 */
export const createStudant = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const id: number = Number(req.body.id);
    const name: string = req.body.name;
    const email: string = req.body.email;
    const birthDate: Date = new Date(req.body.birthDate);

    if (!id || isNaN(id)) throw new Error("Missing id or incorrect format");
    else if (!name) throw new Error("Missing name");
    else if (!email) throw new Error("Missing email");
    else if (!birthDate) throw new Error("Missing birthDate");

    const studant: Studant = {
      id: id,
      email: email,
      birthDate: birthDate,
      name: name,
    };

    await createStydant(studant);

    res.status(201).end()

  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

/**
 GET
 '/studant/:id'
 */
export const getStudantAgeByStudantId = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const studantId: number = Number(req.params.id);

    if (!studantId || isNaN(studantId)) {
      res.statusCode = 422;
      throw new Error("Incorrect format. Id should be a number");
    }

    const studant: Studant | null = await getStudantByStudantId(studantId);

    if (!studant) return res.status(404).send("Does not exists");

    const ageMiliSec: number = Date.now() - studant.birthDate.getMilliseconds();

    return res.status(200).send({ age: ageMiliSec });
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};
