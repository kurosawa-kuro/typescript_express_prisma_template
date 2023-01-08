import { indexService } from "../../services/topService";

describe("Top Service", () => {
    test("Top index service", async () => {
        const res = await indexService();
        console.log('res', res)
        expect(res).toHaveProperty('message');
        expect(res).toEqual({ message: 'Hello World' });
    });
});