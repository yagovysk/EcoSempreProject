import { describe, it, expect, beforeAll, jest, afterAll } from "@jest/globals";
import supertest, { Response } from "supertest";
import Middleware from "../../auth/middleware";
import app from "../../server";
import dotenv from "dotenv";

dotenv.config();

const article: object = {
  title: "Como criar um server express2",
  author: "Ecosempre",
  content: "this is only a test",
  author_id: 1
};

describe("POST /article", () => {
  beforeAll(() => {
    process.env.NODE_ENV = "test";
  });

  it("should return status 201", async () => {
    const res: Response = await supertest(app)
      .post("/article")
      .send(article);
    expect(res.status).toBe(201);
  });

  it.only("should return status 409", async () => {
    const res: Response = await supertest(app)
      .post("/api/v1/article")
      .send(article);
    expect(res.status).toBe(409);
  });

  afterAll(() => {
    process.env.NODE_ENV = "development";
    jest.clearAllMocks();
  });
});
