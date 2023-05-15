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
const user_1 = __importDefault(require("../models/user"));
const article_1 = __importDefault(require("../models/article"));
const Routes = express_1.default.Router();
Routes.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default();
    user.createUser(req, res);
}));
Routes.post("/authentication", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default();
    user.login(req, res);
}));
// articles
Routes.get("/articles", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.getArticles(req, res);
}));
Routes.post("/article", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.creatArticle(req, res);
}));
Routes.delete("/article/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.deleteArticle(req, res);
}));
Routes.put("/article/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.updateArticle(req, res);
}));
exports.default = Routes;
