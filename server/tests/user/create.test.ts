
import supertest, {Response} from 'supertest';

import app from '../../server';
import {describe, test, expect, it}  from '@jest/globals';

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
})