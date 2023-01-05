import request from "supertest";

import app from "../../app";

describe("User route", () => {
    test("User route readUsersAction", async () => {
        const res = await request(app).get("/api/users");
        // console.log('res', res)
        // console.log('res', res)
        console.log('res.error', res.error)
        console.log('res.text', res.text)
        // console.log('res.statusCode', res.statusCode)
        console.log('res.body', res.body)
        console.log('typeof res.body.users[0]', res.body.users[0])
        expect(res.statusCode).toEqual(200);
        // expect(res.body).toEqual({
        //     users: [
        //         { id: 1, name: 'test admin', email: 'admin@admin.com' },
        //         { id: 2, name: 'test user', email: 'user@user.com' },
        //         { id: 3, name: 'test user', email: 'user2@user.com' },
        //         { id: 4, name: 'test user', email: 'user3@user.com' }
        //     ]
        // });
        expect(res.body.users[0]).toHaveProperty('id');
        expect(res.body.users[0]).toHaveProperty('name');
        expect(res.body.users[0]).toHaveProperty('email');
    });

    test("User route createUsersAction", async () => {
        const data = {
            name: "test",
            email: "testtttddddtddddsdtdttt@mail.com",
            password: "password",
        }
        const res = await request(app).post("/api/users").send(data);
        // console.log('res', res)
        // console.log('res', res)
        console.log('res.error', res.error)
        console.log('res.text', res.text)
        // console.log('res.statusCode', res.statusCode)
        console.log('res.body', res.body)
        console.log('typeof res.body.user', res.body.user)
        expect(res.statusCode).toEqual(201);
        // expect(res.body).toEqual({
        //     users: [
        //         { id: 1, name: 'test admin', email: 'admin@admin.com' },
        //         { id: 2, name: 'test user', email: 'user@user.com' },
        //         { id: 3, name: 'test user', email: 'user2@user.com' },
        //         { id: 4, name: 'test user', email: 'user3@user.com' }
        //     ]
        // });
        expect(res.body.user).toHaveProperty('name');
        expect(res.body.user).toHaveProperty('email');
    });
});