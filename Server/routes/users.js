import express from 'express'
import {getUser, getCurUser, addShow} from '../controllers/userPaths.js'
import userModel from '../models/user.js';
import jwtAuth from '../Middleware/jwtAuth.js'
import cors from 'cors'

const router = express.Router()

router.use(cors())
router.get('/get/:user', jwtAuth,  getUser)
router.get('/curUser', jwtAuth, getCurUser)
router.put('/addShow/:id', jwtAuth, addShow)

export default router;