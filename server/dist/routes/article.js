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
const express_1 = __importDefault(require("express"));
const article_1 = __importDefault(require("../models/article"));
const middleware_1 = __importDefault(require("../auth/middleware"));
const articleRoutes = express_1.default.Router();
const middleware = new middleware_1.default();
articleRoutes.get("/articles", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.getArticles(req, res);
}));
articleRoutes.post("/article", middleware.handle, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.creatArticle(req, res);
}));
articleRoutes.get("/article/:key", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.getArticleByKey(req, res);
}));
articleRoutes.delete("/article/:id", middleware.handle, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.deleteArticle(req, res);
}));
articleRoutes.put("/article/:id", middleware.handle, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.updateArticle(req, res);
}));
exports.default = articleRoutes;
