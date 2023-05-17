import {it, expect, test, describe} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';


describe("testing middlware", ()=>{

   it("it should returns 401", async() =>{
    const res:Response = await supertest(app)
    .get("/articles");

    expect(res.status).toBe(401);
   })

   it.only("it should returns 200 if don't have middleware", async() =>{
    const res:Response = await supertest(app)
    .get("/articles");

    expect(res.status).toBe(200);
   })
})