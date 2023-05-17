import { it, describe, test, expect } from '@jest/globals';
import supertest, { Response } from 'supertest';
import app from '../../server';


const user = {
    email: 'sac2@ecosempre.com',
    password: ''
}


describe("POST /authenticate", () => {

    it("it should  returns status 400 and text", async () => {
        const res: Response = await supertest(app)
            .post("/authentication")
            .send(user);


        expect(res.status).toBe(400);
    })

    it("it should returns  200", async () => {
        user.email = "sac10@ecosempre.com"
        user.password = "YzuUG6kWt.";
        const res: Response = await supertest(app)
            .post("/authentication")
            .send(user);
        expect(res.status).toBe(200);
    })

})