import {it, describe, expect, beforeAll, afterAll} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';



const article:object = {
    title: "____TITLE"
}
describe("PUT /articles/[ID]", ()=>{

    
    beforeAll(()=>{
        process.env.NODE_ENV="test";
      })
    it("it should return status 200", async() =>{
        const res:Response = await supertest(app)
        .put("/api/v1/article/5")
        .send(article);

        expect(res.status).toBe(200);
    })
    it.only("it should return status 404", async() =>{
        const res:Response = await supertest(app)
        .put("/api/v1/article/100")
        .send(article);
    
        expect(res.status).toBe(404);
    })
      afterAll(()=>{
        process.env.NODE_ENV="development";
      })
})