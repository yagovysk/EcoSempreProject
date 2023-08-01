import {it, describe, afterAll, beforeAll, expect} from '@jest/globals';
import app from '../../server';
import supertest,{Response} from 'supertest';

describe("deleting tag if exist", ()=>{
    beforeAll(()=>{
        process.env.NODE_ENV = "test";
    })
    
    it("should return status 404", async()=>{
        const res:Response = await supertest(app).delete("/api/v1/tag")
        .send({
            tag_id: 305
        })
        
        expect(res.status).toBe(404);
    })
    afterAll(()=>{
        process.env.NODE_ENV = "development";
    })
})