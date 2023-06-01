import {it, expect, test, describe, beforeAll} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';


describe("testing middlware", ()=>{

   beforeAll(()=>{
      process.env.NODE_ENV="development";
    })
   
   it("it should returns 401", async() =>{
    const res:Response = await supertest(app)
    .get("/articles");
    expect(res.status).toBe(401);
   })

})