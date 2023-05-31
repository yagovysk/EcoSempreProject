import {it, describe, jest, expect} from '@jest/globals';
import supertest, {Response} from "supertest";
import app from '../../server';

// Mock do express-session para simular autenticação
jest.mock("express-session", () => ({
    __esModule: true,
    default: () => (req: any, res: any, next: any) => {
      req.session = {
        userId: 1, // Define o ID do usuário logado
      };
      next();
    },
  }));
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