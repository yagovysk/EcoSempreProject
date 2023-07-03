"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
(0, globals_1.describe)("Register a new tag", () => {
    (0, globals_1.beforeAll)(() => {
        process.env.NODE_ENV = "test";
    });
    (0, globals_1.afterAll)(() => {
        process.env.NODE_ENV = "development";
    });
    (0, globals_1.it)("should returns 201 status", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default).post("/tag")
            .send({
            name: "lixo eletronico"
        });
        (0, globals_1.expect)(res.status).toBe(201);
    }));
    globals_1.it.only("should return 409 status", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .post("/tag")
            .send({
            name: "lixo eletronico"
        });
        (0, globals_1.expect)(res.status).toBe(409);
    }));
});
