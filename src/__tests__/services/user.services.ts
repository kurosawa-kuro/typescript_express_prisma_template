import { createUserService, readUsersService, readUserService, updateUserService, deleteUserService } from "../../services/userService";

describe("User Service", () => {
    test("Read Users service", async () => {
        const res = await readUsersService();
        console.log('res', res)

        expect(res[0]).toHaveProperty('id');
        expect(res[0]).toHaveProperty('name');
        expect(res[0]).toHaveProperty('email');
        expect(res).toEqual([
            { id: 1, name: 'test', email: 'America_Nitzsche@yahoo.com' },
            { id: 2, name: 'test', email: 'Maximilian_Dibbert1@hotmail.com' }
        ]);
    });
});