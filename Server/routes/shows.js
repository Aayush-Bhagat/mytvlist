import express from 'express'
import jwtAuth from '../Middleware/jwtAuth.js'
import { getAllShows, getShow } from '../controllers/showPaths.js'
import cors from 'cors'

const router = express.Router();

router.use(cors());
router.get('/', getAllShows)
router.get('/:id', getShow);

export default router;