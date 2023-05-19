import {it, describe, expect} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';





describe("GET /article/[id]", ()=>{

    it("it should returns 404 status", async () =>{

        const res:Response = await supertest(app)
        .get("/article/4");

        expect(res.status).toBe(404);
    })
    it("it should returns 200 status", async () =>{

        const res:Response = await supertest(app)
        .get("/article/8");

        expect(res.status).toBe(200);


    })
    
})