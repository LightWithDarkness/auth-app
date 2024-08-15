import{Router} from 'express'
import { verifyToken } from '../utils/middlewares/varifyToken.js';
import { deleteAccount, updateAccount } from '../controllers/user.controller.js';

const router = Router()

router.delete('/delete/:id',verifyToken,deleteAccount)
router.post('/update/:id',verifyToken,updateAccount)

export default router;