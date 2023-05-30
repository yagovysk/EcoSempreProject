import {it, describe, expect} from '@jest/globals';
import supertest, {Response} from 'supertest';
import app from '../../server';
import { IContact } from '../../models/contact';



const contacForm: Partial<IContact> = {
    name: "tester",
    email: "test@test.com",
    subject: "anytest",
    phone: '0023400234123',
    message: 'anything here'
}


describe("POST /contact", ()=>{

    it("it should  returns code 201", async ()=>{
        const res:Response = await supertest(app)
        .post("/contact")
        .send(contacForm);

        expect(res.status).toBe(201)
    })
})