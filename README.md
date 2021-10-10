## LabenuSystem:

### Endpoints

#### [Get] pegar idade do aluno pelo seu Id
* /studant/:studantID

#### [Post] criar aluno
* /studant

* body
{
    "id": 3,
    "name": "Rodolfo",
    "email": "redolfo@email.com",
    "birthDate": "2021-12-12"
}

#### [Post] criar professor
* /studant

* body
{
    "id": 3,
    "name": "Profe",
    "email": "profe@email.com",
    "birthDate": "2021-12-12"
}

#### [Post] definir class_id do aluno
* /class/:classId/addStudant

* body
{
    "studandId":3
}

#### [Post] definir class_id do professor
* /class/:classId/addStudant

* body
{
    "teacherId":3
}


```
git clone https://github.com/future4code/lovelace-labenu-system10.git

npm install
npm install @types/express @types/cors

// Crie um arquivo .env
DB_HOST = 
DB_USER = 
DB_PASS = 
DB_NAME = 

npm run migrate
npm run seed

npm run dev


or run to test:
npm run test 

```
