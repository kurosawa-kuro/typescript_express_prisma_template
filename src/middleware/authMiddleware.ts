import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { db } from "../utils/db";

export const AuthMiddleware = async (req: Request, res: Response, next: Function) => {
    try {
        const jwt = req.cookies['jwt'];
        const payload: any = verify(jwt, "process.env.SECRET_KEY");

        console.log({ payload })
        if (!payload) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }

        req["user"] = await db.user.findUnique({
            where: {
                id: payload.id,
            },
        })

        next();
    } catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }
}
