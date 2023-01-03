import express from 'express';

const router = express.Router();
import { registerAction, loginAction, userAction, logoutAction } from '../controllers/authController';

// GET POST
router.route('/register')
    .post(registerAction);

router.route('/login')
    .post(loginAction);

router.route('/user')
    .get(userAction);



router.route('/logout')
    .post(logoutAction);

// // GET POST
// router.route('/')
//     .get(readUsersAction)
//     .post(protect, createUserAction);

// // GET PUT DELETE     
// router.route('/:id')
//     .get(readUserAction)
//     .put(protect, updateUserAction)
//     .delete(protect, deleteUserAction);

export default router;