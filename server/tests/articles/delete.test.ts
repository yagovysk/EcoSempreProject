import {it, describe, test, expect} from '@jest/globals';
import supertest, {Response} from "supertest";
import app from '../../server';

describe("DELETE /article/id", () =>{
    
    const id:number = 3;
    it("it should returns 404", async () =>{
        const res: Response = await supertest(app)
        .delete(`/article/${id}`);
        expect(res.status).toBe(200);
    })
    it.only("it should returns 404", async () =>{
   
        const res: Response = await supertest(app)
        .delete(`/article/${id}`);
        expect(res.status).toBe(404);
    })
})