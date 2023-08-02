import {it, describe, expect, jest, afterAll, beforeAll} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';




describe("GET /article/[id]", ()=>{

  beforeAll(()=>{
    process.env.NODE_ENV="test";
  })
    it.only("it should returns 404 status", async () =>{

        const res:Response = await supertest(app)
        .get("/article/999");

        expect(res.status).toBe(404);
    })
    it("it should returns 200 status", async () =>{

        const res:Response = await supertest(app)
        .get("/article/1");

        expect(res.status).toBe(200);


    })
    afterAll(()=>{
      process.env.NODE_ENV="development";
    })
    
})