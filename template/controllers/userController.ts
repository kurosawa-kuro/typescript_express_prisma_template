
import { Request, Response } from "express";

import asyncHandler from '../utils/asyncHandler';
import { indexService } from '../services/topService';


export const indexAction = asyncHandler(async (req: Request, res: Response) => {
    const data = await indexService()

    return res.status(200).json(data);
});