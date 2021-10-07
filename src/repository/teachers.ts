import { connection } from "../database/connection";
import { Teacher } from "../types";

export const createTeacher = async (teacher: Teacher) => {
  await connection('teacher').insert({
    id: teacher.id,
    name: teacher.name,
    email: teacher.email,
    birth_date: teacher.birthDate
  });
};

export const setClassOfTeacher = async (teacher: Teacher) => {
  await connection('teacher')
          .where({id: teacher.id})
          .update({class_id: teacher.classId})
}