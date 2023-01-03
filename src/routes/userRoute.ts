import express from 'express';

const router = express.Router();
import { createUserAction, readUsersAction, readUserAction, updateUserAction, deleteUserAction } from '../controllers/userController';

// GET POST
router.route('/')
    .get(readUsersAction)
    .post(createUserAction);

// GET PUT DELETE     
router.route('/:id')
    .get(readUserAction)
    .put(updateUserAction)
    .delete(deleteUserAction);

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