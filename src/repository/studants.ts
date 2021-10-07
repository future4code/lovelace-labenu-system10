import { connection } from "../database/connection";
import { Studant } from "../types";

export const createStydant = async (studant: Studant) => {
    await connection
        .insert({
            id: studant.id,
            name: studant.name,
            email: studant.email,
            birth_date: studant.birthDate,
            class_id: studant.class_id
        })
}