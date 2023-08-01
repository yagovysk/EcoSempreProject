import {it, expect, test, describe, beforeAll} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';


describe("testing middlware", ()=>{

   beforeAll(()=>{
      process.env.NODE_ENV="development";
    })
   
   it("it should returns 200", async() =>{
      const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoxLCJleHAiOjE2OTEwMTY0NzYsImlhdCI6MTY5MDkzMDA3Nn0.A7LnU3O7sIeh74FBvAKVSvi11pCKM8qocboDHkkbBgQ";

    const res:Response = await supertest(app)
    .get("/api/v1/articles")
    .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    
   })

})