import { createUserService, readUsersService, readUserService, updateUserService, deleteUserService, User } from "../services/userService";
import supertest from 'supertest'
import app from '../app'
import { Users as usersData } from "../prisma/seed/data/users";
import { db } from "../utils/db";

export const addUsers = async () => {
    usersData.forEach(async (user) => {
        const body: Omit<User, "id"> = {
            "name": user.name,
            "email": user.email,
            "password": user.password,
        };

        console.log("user.name", user.name)
        await createUserService(body);
    });
}