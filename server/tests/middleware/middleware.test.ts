import {it, expect, test, describe, beforeAll} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';


describe("testing middlware", ()=>{

   beforeAll(()=>{
      process.env.NODE_ENV="development";
    })
   
   it("it should returns 200", async() =>{
      const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoxLCJleHAiOjE2ODYxNjA1MDgsImlhdCI6MTY4NjA3NDEwOH0.sjWD84VdDCYrdajB7esjXDBzD_XJPgu466DxbWQrlao";

    const res:Response = await supertest(app)
    .get("/articles")
    .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    
   })

})