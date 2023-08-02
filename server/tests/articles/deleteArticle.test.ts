import {it, describe, afterAll, beforeAll, expect} from '@jest/globals';
import supertest, {Response} from "supertest";
import app from '../../server';


describe("DELETE /article/id", () =>{
    beforeAll(()=>{
      process.env.NODE_ENV="test";
    })
    const id:number = 3;
    it("it should returns 404", async () =>{
        const res: Response = await supertest(app)
        .delete(`/api/v1/article/${id}`);
        expect(res.status).toBe(200);
    })
    it.only("it should returns 404", async () =>{
   
        const res: Response = await supertest(app)
        .delete(`/api/v1/article/99999`);
        expect(res.status).toBe(404);
    })
  
    afterAll(()=>{
      process.env.NODE_ENV="development";
    })
})