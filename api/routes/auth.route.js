import express from 'express'
import { signIn, signOut, signUp } from '../controllers/auth.controller.js';
import { verifyToken } from '../utils/middlewares/varifyToken.js';

const router = express.Router()

router.post('/signup',signUp)
router.post('/signin',signIn)
router.post('/signout/:id',verifyToken,signOut)

export default router