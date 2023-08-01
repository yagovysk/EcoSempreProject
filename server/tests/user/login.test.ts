import { it, describe, test, expect } from '@jest/globals';

import supertest, { Response } from 'supertest';
import dotenv from 'dotenv';
import app from '../../server';

dotenv.config();

const user = {
    email: 'sac2@ecosempre.com',
    password: ''
}


describe("POST /authenticate", () => {

    it("it should  returns status 404 and text", async () => {
        const res: Response = await supertest(app)
            .post("/authentication")
            .send(user);


        expect(res.status).toBe(404);
    })

    it("it should returns  200", async () => {
        user.email = process.env.ADMIN_EMAIL!;
        user.password = process.env.ADMIN_PASSWORD!;
        const res: Response = await supertest(app)
            .post("/api/v1/authentication")
            .send(user);
        expect(res.status).toBe(200);
    })

})