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

export const getTeacherByTeacherId = async (
  teacherId: number
): Promise<Teacher|null> => {
  const [teacher]: any = await connection("teacher").where({ id: teacherId });

  if(!teacher || !Object.keys(teacher).length){
    return null
  }

   return {
     id: teacher.id,
     email: teacher.email,
     name: teacher.name,
     birthDate: new Date(teacher.birth_date),
     classId: teacher.class_id,
   };

};