import { Router } from "express";
import {
    createStudant,
    getStudantAgeByStudantId
} from "../endpoints/studants"


const router = Router()

router.post('/studant', createStudant)
router.get('/studant/:id', getStudantAgeByStudantId)

export default router