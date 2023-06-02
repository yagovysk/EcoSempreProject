import {it, expect, beforeAll, afterAll, describe}  from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';
describe("TEST CONTACT ROUTES", ()=>{

    beforeAll(()=>{
        process.env.NODE_ENV = "test";
    })
    it("shoulf returns status 200", async()=>{
        const res:Response  = await supertest(app)
        .get("/contacts");

        expect(res.status).toBe(200);
    })
    afterAll(()=>{
        process.env.NODE_ENV = "development";
    })
})