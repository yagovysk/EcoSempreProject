import { expect, it, describe } from "@jest/globals";
import supertest, {Response}  from "supertest";
import app from "../server";


describe("GET ", ()=>{
    it("should returns status 404 ", async ()=>{
        const res:Response = await supertest(app).get("/anyurl");

        expect(res.status).toBe(404);
    })
})