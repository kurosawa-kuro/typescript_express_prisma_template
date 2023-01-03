import { Request, Response } from "express";

import { User, registerService, loginService, userService, logoutService } from "../services/authService";
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
    // console.log("req.user after protect", req.user)
    const users = await userService();

    return res.status(200).json({ users });
});

// // @desc    Update user
// // @route   PUT /user/:id
// // @access  Public
const logoutAction = asyncHandler(async (req: Request, res: Response) => {
    const id: number = parseInt(req.params?.id, 10);
    const body: User = req.body;
    const user = await logoutService(id, body);

    return res.status(201).json({ user });
});

export { registerAction, userAction, loginAction, logoutAction };