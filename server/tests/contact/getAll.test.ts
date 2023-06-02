import {it, expect, beforeAll, afterAll, describe}  from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';
describe("TEST CONTACT ROUTES", ()=>{

    it("shoulf returns status 200", async()=>{
        const res:Response  = await supertest(app)
        .get("/contacts");

        expect(res.status).toBe(200);
    })
})