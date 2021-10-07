import { connection } from "../database/connection";
import { Teacher } from "../types";

export const createTeacher = async (teacher: Teacher) => {
  await connection.insert({
    id: teacher.id,
    name: teacher.name,
    email: teacher.email,
    birth_date: teacher.birthDate
  });
};