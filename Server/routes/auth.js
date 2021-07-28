import express from 'express'
import {registerUser} from '../controllers/authPaths.js'
import userModel from '../models/user.js';

const router = express.Router()

router.post('/', registerUser)

export default router;