  import { describe, it, expect, beforeEach, jest } from "@jest/globals";
  import supertest, { Response } from "supertest";
  import Middleware from "../../auth/middleware";
  import app from "../../server";


  const article: object = {
    title: "Como criar um server express2",
    author: "Ecosempre",
    content: "this is only a test",
    author_id: 1
  };

 

  describe("POST /article", () => {
    it("should return status 201", async () => {
      const res: Response = await supertest(app)
        .post("/article")
        .send(article);
      expect(res.status).toBe(201);
    });

    it("should return status 409", async () => {
      const res: Response = await supertest(app)
        .post("/article")
        .send(article);
      expect(res.status).toBe(409);
    });
  });
