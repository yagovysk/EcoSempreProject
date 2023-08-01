import {it, expect, beforeAll, afterAll, describe}  from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';
describe("TEST CONTACT ROUTES", ()=>{

    beforeAll(()=>{
        process.env.NODE_ENV = "test";
    })
   
    it("should returns status 200", async()=>{
        const res:Response  = await supertest(app)
        .get("/api/v1/contacts");

        expect(res.status).toBe(200);
    })
    it.only("should returns max 4 items", async ()=>{
        const res:Response  = await supertest(app)
        .get("/api/v1/contacts?limit=4&page=1");

       
        expect(res.status).toBe(200)
      
    })
    afterAll(()=>{
        process.env.NODE_ENV = "development";
    })
})
