import { createUserService, readUsersService, readUserService, updateUserService, deleteUserService, User } from "../../services/userService";
import { db } from "../../utils/db";
import resetDatabase from "../../testUtils/resetDatabase";
import { addUsers } from "../../testUtils/addData";
import { Users as usersData } from "../../prisma/seed/data/users";

describe("User Service", () => {
    beforeEach(async () => {
        await resetDatabase();
    });
    afterAll(async () => {
        await db.$disconnect();
    });

    test("Read Users service", async () => {
        await addUsers(usersData)

        const res = await readUsersService();
        console.log('readUsersService res', res)

        expect(res[0]).toHaveProperty('id');
        expect(res[0]).toHaveProperty('name');
        expect(res[0]).toHaveProperty('email');
        expect(res.length).toBe(usersData.length);
    });

    // test("Create Users service", async () => {
    //     const body: Omit<User, "id"> = {
    //         "name": "name 1",
    //         "email": "email 1",
    //         "password": "password",
    //     };
    //     const res = await createUserService(body);
    //     console.log('res', res)

    //     expect(res).toHaveProperty('id');
    //     expect(res).toHaveProperty('name');
    //     expect(res).toHaveProperty('email');
    //     expect(res).not.toHaveProperty('password');
    //     delete res.id
    //     expect(res).toEqual({ name: 'name 1', email: 'email 1' });
    // });
});