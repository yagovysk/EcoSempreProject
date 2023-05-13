import { describe, it, test, expect } from "@jest/globals";

import supertest, {Response} from "supertest";
import app from "../../server";

const article:object ={
    title: "Como criar um server express2",
    author: "Ecosempre",
    content: "this is only a test",
    author_id: 1
}


describe("POST /article", ()=>{
   
    it("it should returns status 201", async () =>{
        const res:Response = await supertest(app)
        .post("/article")
        .send(article);
        expect(res.status).toBe(201);
    });
    it.only("it should returns status 409", async ()=>{
        const res:Response = await supertest(app)
        .post("/article")
        .send(article);
        expect(res.status).toBe(409);
    })
})