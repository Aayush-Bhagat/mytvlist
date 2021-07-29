import express from 'express'
import {getUser, getCurUser} from '../controllers/userPaths.js'
import userModel from '../models/user.js';
import jwtAuth from '../Middleware/jwtAuth.js'

const router = express.Router()

router.get('/get/:user', jwtAuth,  getUser)
router.get('/curUser', jwtAuth, getCurUser)

export default router;