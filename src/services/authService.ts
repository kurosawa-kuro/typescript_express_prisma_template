import bcryptjs from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { db } from "../utils/db";

export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
};

const registerService = async (user: Omit<User, "id">):
    Promise<Omit<User, "password"> | undefined> => {
    const { name, email, password } = user;

    const foundUserWithEmail = await db.user.findUnique({
        where: {
            email,
        },
    })

    if (foundUserWithEmail) {
        throw new Error('user already exists');
    }

    // const token = sign({ id: user.id }, "process.env.SECRET_KEY");

    return db.user.create({
        data: {
            name,
            email,
            password: await bcryptjs.hash(password!, 10),
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
        },
    });
};

const loginService = async (
    user: Omit<User, "id" | "name">
): Promise<string | undefined> => {
    const { email, password } = user;
    const foundUserWithEmail = await db.user.findUnique({
        where: { email },
    })

    if (!foundUserWithEmail) {
        throw new Error("user not found");
    }

    const isValidUser = await bcryptjs.compare(password!, foundUserWithEmail.password)

    if (!isValidUser) {
        throw new Error("invalid credintial data");
    }

    const token = sign({ id: foundUserWithEmail.id }, "process.env.SECRET_KEY");
    // console.log({ token })
    return token;
};

export { registerService, loginService };