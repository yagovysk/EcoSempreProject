import {it, describe, afterAll, beforeAll, expect} from '@jest/globals';
import app from '../../server';
import supertest,{Response} from 'supertest';

describe("get all registered tags", ()=>{
    beforeAll(()=>{
        process.env.NODE_ENV = "test";
    })
    afterAll(()=>{
        process.env.NODE_ENV = "development";
    })

    it("should return status 200", async()=>{
        const res:Response = await supertest(app).get("/tags")
        expect(res.status).toBe(200);
    })
})