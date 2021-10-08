import { Classes, Studant, Teacher } from "../types";
import { createClass } from "./class";
import {
  createStydant,
  getStudantByStudantId,
  setClassOfStudant,
} from "./studants";
import { createTeacher, setClassOfTeacher } from "./teachers";

const studantTest: Studant = {
  id: 2,
  name: "Estudante Teste",
  email: "teste@email.com",
  birthDate: new Date("2021-12-02"),
};

const teacherTest: Teacher = {
  id: 2,
  name: "Professor Teste",
  email: "teste@email.com",
  birthDate: new Date("2021-12-02"),
};

const classTest: Classes = {
  id: 2,
  name: "Teste-na-night",
  module: 6,
  startDate: new Date("2021-01-02"),
  endDate: new Date("2021-09-15"),
};

const printError = (err: any) =>
  console.log(err.sqlMessage || err.message || "ERRO");

createClass(classTest)
  .then(() => console.log("[success] create class"))
  .catch(printError);

createStydant(studantTest)
  .then(() => console.log("[success] create studant"))
  .catch(printError);


studantTest.classId = 1;
setClassOfStudant(studantTest)
  .then(() => console.log("[success] update studant"))
  .catch(printError);

createTeacher(teacherTest)
  .then(() => console.log("[success] create teacher"))
  .catch(printError);

teacherTest.classId = 1;
setClassOfTeacher(teacherTest)
  .then(() => console.log("[success] update teacher"))
  .catch(printError);
