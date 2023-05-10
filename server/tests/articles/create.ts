import { describe, it, test, expect } from "@jest/globals";

import supertest, {Response} from "supertest";
import app from "../../server";



describe("POST /article", ()=>{
    const article:object ={
        title: "Como criar um server express2",
        author: "Ecosempre",
        content: "this is only a test"
    }
   
    it("it should returns status 201", async () =>{
        const res:Response = await supertest(app)
        .post("/article")
        .send(article);
        console.log(res.text)
        expect(res.status).toBe(201);
    })
})