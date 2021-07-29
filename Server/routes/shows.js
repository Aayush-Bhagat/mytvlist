import express from 'express'
import jwtAuth from '../Middleware/jwtAuth.js'

import { getAllShows, getShow } from '../controllers/showPaths.js'

const router = express.Router();

router.get('/', jwtAuth, getAllShows)
router.get('/:id', jwtAuth, getShow);

export default router;