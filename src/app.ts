import { AddressInfo } from "net";
import express from 'express'
import cors from 'cors'

import studantRouter from './routes/studant'
import teacherRouter from './routes/teacher'
import classRouter from './routes/class'


const app = express()

app.use(express.json())
app.use(cors())

app.use('/', studantRouter)
app.use('/', teacherRouter)
app.use('/', classRouter)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});