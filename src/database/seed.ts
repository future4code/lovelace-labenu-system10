import { connection } from "./connection";
import { data } from "./data";

const closeConnection = async () => {
  connection.destroy();
};

const seedValues = async () => {
    await connection('cohort').insert(data.class[0])
    console.log(`Insert ${data.class[0].name}`)
    await connection('cohort').insert(data.class[1])
    console.log(`Insert ${data.class[1].name}`)

    await connection('studant').insert(data.studant[0])
    console.log(`Insert ${data.studant[0].name}`)
    await connection('studant').insert(data.studant[1])
    console.log(`Insert ${data.studant[1].name}`)

    await connection('teacher').insert(data.teacher[0])
    console.log(`Insert ${data.teacher[0].name}`)
    await connection('teacher').insert(data.teacher[1])
    console.log(`Insert ${data.teacher[1].name}`)

};

(async function main() {
  try {
    await seedValues()
    console.log("Succesfull - Insert values");

  } catch (error: any) {
    console.log(error.message || error.sqlMessage);
  } finally {
    await closeConnection();
  }
})();
