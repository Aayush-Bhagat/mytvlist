import express from 'express'

import { getPosts } from '../controllers/paths.js'

const router = express.Router();

router.get('/', getPosts);

export default router;