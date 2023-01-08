import { createUserService, readUsersService, readUserService, updateUserService, deleteUserService, User } from "../../services/userService";
import { db } from "../../utils/db";
import resetDatabase from "../testUtils/resetDatabase";

describe("User Service", () => {
    beforeEach(async () => {
        await resetDatabase();
    });
    afterAll(async () => {
        await db.$disconnect();
    });

    // test("Read Users service", async () => {
    //     const res = await readUsersService();
    //     console.log('res', res)

    //     expect(res[0]).toHaveProperty('id');
    //     expect(res[0]).toHaveProperty('name');
    //     expect(res[0]).toHaveProperty('email');
    //     expect(res).toEqual([
    //         { id: 1, name: 'test', email: 'America_Nitzsche@yahoo.com' },
    //         { id: 2, name: 'test', email: 'Maximilian_Dibbert1@hotmail.com' }
    //     ]);
    // });

    test("Create Users service", async () => {
        const body: Omit<User, "id"> = {
            "name": "name 1",
            "email": "email 1",
            "password": "password",
        };
        const res = await createUserService(body);
        console.log('res', res)

        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('email');
        expect(res).not.toHaveProperty('password');
        delete res.id
        expect(res).toEqual({ name: 'name 1', email: 'email 1' });
    });
});