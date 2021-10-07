import { Router } from "express";
import {
    addStudantAtClass,
    addTeacherAtClass,
    createClass
} from "../endpoints/class"

const router = Router()

router.post('/class', createClass)
router.post('/class/:idClass/addTeacher', addTeacherAtClass)
router.post('/class/:idClass/addStudant', addStudantAtClass) // dados do studant por body

export default router