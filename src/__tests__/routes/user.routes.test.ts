import request from "supertest";
import { db } from "../../utils/db";
import resetDatabase from "../../testUtils/resetDatabase";
import { addUsers } from "../../testUtils/addData";
import app from "../../app";
import { Users as usersData } from "../../prisma/seed/data/users";

describe("User route", () => {
    beforeEach(async () => {
        await resetDatabase();
    });
    afterAll(async () => {
        await db.$disconnect();
    });

    test("User route readUsersAction", async () => {
        await addUsers()

        const res = await request(app).get("/api/users");
        // console.log('res', res)
        // console.log('res.error', res.error)
        // console.log('res.text', res.text)
        // console.log('res.statusCode', res.statusCode)
        // console.log('res.body', res.body)
        // console.log('typeof res.body.users[0]', res.body.users[0])
        expect(res.statusCode).toEqual(200);
        expect(res.body.users[0]).toHaveProperty('id');
        expect(res.body.users[0]).toHaveProperty('name');
        expect(res.body.users[0]).toHaveProperty('email');
        expect(res.body.users.length).toBe(usersData.length);
    });

    // test("User route createUsersAction", async () => {
    //     const data = {
    //         name: "test",
    //         email: faker.internet.email(),
    //         password: "password",
    //     }
    //     const res = await request(app)
    //         .post("/api/users")
    //         .send(data)

    //     console.log('res', {
    //         'statusCode': res.statusCode,
    //         'error': res.error,
    //         'text': res.text,
    //         "body": res.body
    //     })

    //     expect(res.statusCode).toEqual(201);
    //     expect(res.body.user).toHaveProperty('id');
    //     expect(res.body.user).toHaveProperty('name');
    //     expect(res.body.user).toHaveProperty('email');
    // });

    // test("User route uploadUsersAction", async () => {
    //     const data = {
    //         name: "test",
    //         email: faker.internet.email(),
    //         password: "password",
    //     }
    //     const res = await request(app)
    //         .post("/api/users/upload")
    //         .set('content-type', 'multipart/form-data')
    //         .field('email', 'myemail@gmail.com')
    //         .attach('image', fs.readFileSync(`${__dirname}/file.png`), 'file.png')

    //     console.log("path", express.static('./uploads'))
    //     console.log('res', {
    //         'statusCode': res.statusCode,
    //         'error': res.error,
    //         'text': res.text,
    //         "body": res.body
    //     })

    //     console.log("res.body.url", res.body.url.replace('http://localhost:8000/api/uploads/', ''))

    //     const filename = res.body.url.replace('http://localhost:8000/api/uploads/', '')

    //     expect(res.statusCode).toEqual(200);
    //     expect(res.body).toHaveProperty('url');
    //     expect(fs.existsSync(`uploads/${filename}`)).toBeTruthy();
    // });
});
