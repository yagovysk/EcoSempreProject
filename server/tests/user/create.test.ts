
import {describe, expect, it, afterAll, beforeAll}  from '@jest/globals';
import supertest, {Response} from 'supertest';

import app from '../../server';

const admin = {
    nickname: "ecoSempre",
    email: "sac@ecosempre.com",
    password: "teste123"
}
describe("POST /user", ()=>{
   
    it("it should return 201 if  user was created", async() =>{
        const res:Response = await supertest(app)
        .post("/user")
        .send(admin);
        expect(res.status).toBe(201);
    })

    it.only("it should return status 400", async()=>{
        const res:Response = await supertest(app)
        .post("/user")
        .send(admin);   
        expect(res.status).toBe(400);
    })
    beforeAll(()=>{
        process.env.NODE_ENV="test";
      })
      afterAll(()=>{
        process.env.NODE_ENV="development";
      })
})