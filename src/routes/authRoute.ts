import express from 'express';

const router = express.Router();
import { AuthMiddleware } from '../middleware/authMiddleware';
import { registerAction, loginAction, userAction, logoutAction } from '../controllers/authController';

// GET POST
router.route('/register')
    .post(registerAction);

router.route('/login')
    .post(loginAction);

router.route('/user')
    .get(AuthMiddleware, userAction);

router.route('/logout')
    .post(AuthMiddleware, logoutAction);

export default router;