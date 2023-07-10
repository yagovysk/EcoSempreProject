import {it, describe, afterAll, beforeAll, expect} from '@jest/globals';
import supertest,{Response} from 'supertest';
import app from '../../server';




describe("POST /newsletter", ()=>{

    it("should return 201 status", async() =>{
        const res:Response = await supertest(app)
        .post("/newsletter")
        .send({
            email: "first@gmail.com"
        });

        expect(res.status).toBe(201);
    })
})