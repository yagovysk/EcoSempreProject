import {it, expect, test, describe, beforeEach, beforeAll}  from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';




describe("GET /articles", ()=>{

    it.only("it should returns an Array", async () =>{
        const res:Response = await supertest(app)
        .get("/articles");
        expect(Array.isArray(res.body)).toBe(true);
    })
    it("it should returns a response with max length 2", async () =>{
        const res:Response = await supertest(app)
        .get("/articles?page=1&limit=2");

        expect(res.body.length).toBe(2);
    })
})