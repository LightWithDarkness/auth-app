import express from 'express'
import { signIn, signOut, signUp } from '../controllers/auth.controller.js';

const router = express.Router()

router.post('/signup',signUp)
router.post('/signIn',signIn)
router.post('/signOut',signOut)

export default router