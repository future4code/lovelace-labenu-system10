import { connection } from "../database/connection";
import { Studant } from "../types";

export const createStydant = async (studant: Studant) => {
  await connection("studant").insert({
    id: studant.id,
    name: studant.name,
    email: studant.email,
    birth_date: studant.birthDate,
  });
};

export const getStudantAgeByStudantId = async (
  studandId: number
): Promise<Studant> => {
  const [studant]: any = await connection("studant").where({ id: studandId });

   return {
     id: studant.id,
     email: studant.email,
     name: studant.name,
     birthDate: new Date(studant.birth_date),
     classId: studant.class_id,
   };

};

export const setClassOfStudant = async (studant: Studant) => {
  await connection("studant")
    .where({ id: studant.id })
    .update({ class_id: studant.classId });
};
