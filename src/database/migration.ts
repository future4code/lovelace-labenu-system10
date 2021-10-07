import { connection } from "./connection";

const createTables = async () => {
  //create class
  await connection.raw(`
        CREATE TABLE IF NOT EXISTS cohort (
            id INT NOT NULL PRIMARY KEY ,
            name VARCHAR(50) NOT NULL,
            module INT NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            CHECK (name like "%-na-night"
            AND module < 8)
        ); 
    `);

  //create studant
  await connection.raw(`
        CREATE TABLE IF NOT EXISTS studant (
            id INT NOT NULL PRIMARY KEY ,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            class_id INT NOT NULL,
            FOREIGN KEY (class_id) REFERENCES cohort(id)
        ); 
    `);

    //create teacher
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS teacher (
            id INT NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            class_id INT NOT NULL,
            FOREIGN KEY (class_id) REFERENCES cohort(id)
        ); 
    `);

    //create hobbie
    await connection.raw(`
    CREATE TABLE IF NOT EXISTS hobbie (
            id INT NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL
        ); 
    `);

    //create studant hobbie
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS studant_hobbie (
            studant_id INT NOT NULL,
            hobbie_id INT NOT NULL,
            FOREIGN KEY (studant_id) REFERENCES studant(id),
            FOREIGN KEY (hobbie_id) REFERENCES hobbie(id)
        ); 
    `);

    //create speciality
    await connection.raw(`
    CREATE TABLE IF NOT EXISTS speciality (
            id INT NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL
        ); 
    `);

    //create teacher speciality
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS teacher_speciality (
            teacher_id INT NOT NULL,
            speciality_id INT NOT NULL,
            FOREIGN KEY (teacher_id) REFERENCES teacher(id),
            FOREIGN KEY (speciality_id) REFERENCES speciality(id)
        ); 
    `);
};

const closeConnection = async () => {
    connection.destroy();
  };


(async function main(){
    try {
        await createTables()
        console.log("Succesfull - Create tables")

    } catch (error: any) {
        console.log(error.message || error.sqlMessage)

    }finally {
        await closeConnection()
    }
})()