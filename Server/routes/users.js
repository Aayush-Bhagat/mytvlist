import express from 'express'
import {getUser} from '../controllers/userPaths.js'
import userModel from '../models/user.js';

const router = express.Router()

router.get('/:user', getUser)

export default router;