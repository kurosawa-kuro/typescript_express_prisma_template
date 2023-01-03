import request from "supertest";

import app from "../../src/app";

describe("Top route", () => {
    test("Top route index action", async () => {
        const res = await request(app).get("/");
        // console.log('res', res)
        console.log('res', res)
        console.log('res.error', res.error)
        console.log('res.text', res.text)
        // console.log('res.statusCode', res.statusCode)
        // console.log('res.body', res.body)
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: "Hello World" });
    });
});