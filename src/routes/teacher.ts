import { Router } from "express";
import {
    createTeacherController
} from "../endpoints/teachers"

const router = Router()

router.post('/teacher', createTeacherController)

export default router