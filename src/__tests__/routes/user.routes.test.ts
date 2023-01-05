import express from 'express';
import request from "supertest";
import { faker } from '@faker-js/faker';

import fs from 'fs';
import app from "../../app";

describe("User route", () => {

    // test("User route readUsersAction", async () => {

    //     const res = await request(app).get("/api/users");
    //     // console.log('res', res)
    //     // console.log('res', res)
    //     console.log('res.error', res.error)
    //     console.log('res.text', res.text)
    //     // console.log('res.statusCode', res.statusCode)
    //     console.log('res.body', res.body)
    //     console.log('typeof res.body.users[0]', res.body.users[0])
    //     expect(res.statusCode).toEqual(200);
    //     // expect(res.body).toEqual({
    //     //     users: [
    //     //         { id: 1, name: 'test admin', email: 'admin@admin.com' },
    //     //         { id: 2, name: 'test user', email: 'user@user.com' },
    //     //         { id: 3, name: 'test user', email: 'user2@user.com' },
    //     //         { id: 4, name: 'test user', email: 'user3@user.com' }
    //     //     ]
    //     // });
    //     expect(res.body.users[0]).toHaveProperty('id');
    //     expect(res.body.users[0]).toHaveProperty('name');
    //     expect(res.body.users[0]).toHaveProperty('email');
    // });

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

    test("User route uploadUsersAction", async () => {
        const data = {
            name: "test",
            email: faker.internet.email(),
            password: "password",
        }
        const res = await request(app)
            .post("/api/users/upload")
            .set('content-type', 'multipart/form-data')
            .field('email', 'myemail@gmail.com')
            .attach('image', fs.readFileSync(`${__dirname}/file.png`), 'file.png')

        console.log("path", express.static('./uploads'))
        console.log('res', {
            'statusCode': res.statusCode,
            'error': res.error,
            'text': res.text,
            "body": res.body
        })

        console.log("res.body.url", res.body.url.replace('http://localhost:8000/api/uploads/', ''))

        const filename = res.body.url.replace('http://localhost:8000/api/uploads/', '')

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('url');

        // const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000))
        // await sleep(4)
        // expect(fs.existsSync('src/uploads/8ea4i72f5c1j.png')).toBeTruthy();
        // expect(fs.existsSync(`src/uploads/${filename}`)).toBeTruthy();
        // console.log(`${__rootDir}`)
        // console.log(fs.existsSync(`src/uploads/3f3cj09e6af4.png`))
        console.log(fs.existsSync(`uploads/${filename}`))
        expect(fs.existsSync(`uploads/${filename}`)).toBeTruthy();
        // console.log(fs.existsSync(`../../../../src/uploads/file.png`))
        // expect(fs.readFileSync(`${__dirname}/file.png`)).toBe(true);
    });
});
