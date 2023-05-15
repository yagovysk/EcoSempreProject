import {it, describe, expect, test} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';



const article:object = {
    title: "____TITLE"
}
describe("PUT /articles/[ID]", ()=>{


    it("it should return status 200", async() =>{
        const res:Response = await supertest(app)
        .put("/article/5")
        .send(article);

        expect(res.status).toBe(200);
    })
    it("it should return status 404", async() =>{
        const res:Response = await supertest(app)
        .put("/article/100")
        .send(article);
    
        expect(res.status).toBe(404);
    })
})