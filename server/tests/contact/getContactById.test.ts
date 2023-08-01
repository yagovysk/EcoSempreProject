import { it, describe, expect, beforeAll, afterAll } from '@jest/globals';
import supertest, { Response } from 'supertest';
import app from '../../server';



describe("get contact by Id", () => {

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    })

    it("should return status 200", async()=>{
        const res:Response = await supertest(app)
        .get("/api/v1/article/1");

        expect(res.status).toBe(200);
    })
    it.only("should return status 404", async ()=>{
        const res:Response = await supertest(app)
        .get("/api/v1/article/999");

        expect(res.status).toBe(404);
    })

    afterAll(() => {
        process.env.NODE_ENV = 'development';
    })
    
    
    })
