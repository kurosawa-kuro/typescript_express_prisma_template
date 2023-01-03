import express from 'express';

const router = express.Router();
import { indexAction } from '../controllers/topController';

router.route('/')
    .get(indexAction)

export default router;