import { Router } from "express";
import {
    createTeacher
} from "../endpoints/teachers"

const router = Router()

router.post('/studant', createTeacher)

export default router