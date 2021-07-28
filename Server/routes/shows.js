import express from 'express'

import { getAllShows, getShow } from '../controllers/paths.js'

const router = express.Router();

router.get('/', getAllShows)
router.get('/:id', getShow);

export default router;