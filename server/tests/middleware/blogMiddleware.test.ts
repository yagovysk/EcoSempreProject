import {it, expect, test, describe, beforeAll} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';


describe("testing the blog middlware", ()=>{

    it("should return 400 status", async ()=>{
        const res:Response = await supertest(app)
        .get("/articles");
        expect(res.status).toBe(400)
    })
    it("should return 403 status", async ()=>{
        const res:Response = await supertest(app)
        .get("/articles")
        .set("origin", '');
        expect(res.status).toBe(403)
    })
})