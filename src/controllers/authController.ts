import { Request, Response } from "express";

import { User, registerService, loginService } from "../services/authService";
import asyncHandler from '../utils/asyncHandler';

// @desc    Create user
// @route   POST /users
// @access  Public
const registerAction = asyncHandler(async (req: Request, res: Response) => {
    const body: User = req.body;
    const user = await registerService(body);

    return res.status(201).json({ user });
});



// // @desc    Read user
// // @route   GET /users/:id
// // @access  Public
const loginAction = asyncHandler(async (req: Request, res: Response) => {
    const body: User = req.body;
    const token = await loginService(body);

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1day
    });

    res.send({
        message: 'success'
    });
});

// @desc    Read users
// @route   GET /users
// @access  Public
const userAction = asyncHandler(async (req: Request, res: Response) => {
    const { password, ...user } = req['user'];

    res.send(user);
});

// // @desc    Update user
// // @route   PUT /user/:id
// // @access  Public
const logoutAction = asyncHandler(async (req: Request, res: Response) => {
    res.cookie('jwt', '', { maxAge: 0 });

    res.send({
        message: 'success'
    })
});

export { registerAction, userAction, loginAction, logoutAction };