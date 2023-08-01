import {it, describe, afterAll, beforeAll, expect} from '@jest/globals';
import app from '../../server';
import supertest,{Response} from 'supertest';

describe("Register a new tag", ()=>{
    beforeAll(()=>{
        process.env.NODE_ENV = "test";
    })
    
    it("should returns 201 status", async()=>{
        const res:Response = await supertest(app).post("/api/v1/tag")
        .send({
            name: "lixo eletronico"
        });
        
        expect(res.status).toBe(201);
    })
    it.only("should return 409 status", async()=>{
        const res:Response = await supertest(app)
        .post("/api/v1/tag")
        .send({
            name: "lixo eletronico"
        });

        expect(res.status).toBe(409);
    })
    afterAll(()=>{
        process.env.NODE_ENV = "development";
    })
})