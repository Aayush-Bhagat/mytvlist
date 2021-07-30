import express from 'express'
import {registerUser, loginUser} from '../controllers/authPaths.js'
import userModel from '../models/user.js';
import cors from 'cors'

const router = express.Router()
router.use(cors())
router.post('/register', registerUser)
router.post('/login', loginUser)
export default router;