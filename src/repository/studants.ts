import { connection } from "../database/connection";
import { Studant } from "../types";

export const createStydant = async (studant: Studant) => {
  await connection.insert({
    id: studant.id,
    name: studant.name,
    email: studant.email,
    birth_date: studant.birthDate,
    class_id: studant.class_id,
  });
};

export const getStudantAgeByStudantId = async (studandId: number) => {
    const studant = await connection('studant')
                        .where({id: studandId})

    return studant
}