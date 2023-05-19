import {it, expect, describe} from '@jest/globals';
import supertest,{Response} from 'supertest';
import app from '../../server';

describe("GET /article/[slug]", () =>{

    it("it should returns 404", async ()=>{
        const res:Response = await supertest(app)
        .get("/article/invalid-slug");

        expect(res.status).toBe(404);
    })
    it("it should returns 200 status", async () =>{
        const res:Response = await supertest(app)
        .get("/article/5-things-that-you-could-lear233___");

        expect(res.status).toBe(200);
    })
})