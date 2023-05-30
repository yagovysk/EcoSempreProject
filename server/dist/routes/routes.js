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
const contact_1 = __importDefault(require("../models/contact"));
const middleware_1 = __importDefault(require("../auth/middleware"));
const Routes = express_1.default.Router();
Routes.post("/authentication", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default();
    user.login(req, res);
}));
Routes.post("/user", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default();
    user.createUser(req, res);
}));
// contact
Routes.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = new contact_1.default();
    contact.registerContact(req, res);
}));
// articles
Routes.get("/articles", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.getArticles(req, res);
}));
Routes.post("/article", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.creatArticle(req, res);
}));
Routes.get("/article/:key", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.getArticleByKey(req, res);
}));
Routes.delete("/article/:id", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.deleteArticle(req, res);
}));
Routes.put("/article/:id", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = new article_1.default();
    article.updateArticle(req, res);
}));
exports.default = Routes;
