import { Router } from "express";
import {
    createTeacher
} from "../endpoints/teachers"

const router = Router()

router.post('/teacher', createTeacher)

export default router