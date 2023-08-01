import {it, expect, test, describe, afterAll, beforeAll}  from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';




describe("GET /articles", ()=>{

    beforeAll(()=>{
        process.env.NODE_ENV="test";
      })
      
    it.only("it should returns an Array", async () =>{
        const res:Response = await supertest(app)
        .get("/api/v1/articles");
        expect(Array.isArray(res.body)).toBe(true);
    })
    it("it should returns a response with max length 2", async () =>{
        const res:Response = await supertest(app)
        .get("/api/v1/articles?limit=2&page=1");

        expect(res.body.length).toBe(2);
    })
    afterAll(()=>{
      process.env.NODE_ENV="development";
    })
})