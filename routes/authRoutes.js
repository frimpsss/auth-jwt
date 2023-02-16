import { Router } from "express";
import { loginController } from "../controller/login.controller.js";
import { registerController } from "../controller/register.controller.js";
export const router = Router()

router.post('/login', loginController)
router.post('/register', registerController)