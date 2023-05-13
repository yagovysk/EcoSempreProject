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
const connection_1 = __importDefault(require("../database/connection"));
const static_1 = __importDefault(require("../static"));
class Article {
    constructor() {
        this.currentDate = new static_1.default().getCurrentDate();
        this.verifyArticleByTitle = (title) => __awaiter(this, void 0, void 0, function* () {
            const exist = yield (0, connection_1.default)("articles").select("*").where({ title });
            if (exist[0] !== undefined) {
                return true;
            }
            return false;
        });
        this.verifyArticleById = (id) => __awaiter(this, void 0, void 0, function* () {
            const exist = yield (0, connection_1.default)("articles").select("*").where({ id });
            if (exist[0] !== undefined) {
                return true;
            }
            return false;
        });
        // reavaliate this private method, may be unnecessary
        this.articleValidate = (article) => {
            const { title, author, content, author_id } = article;
            if (!title || !author || !content || !author_id) {
                return false;
            }
            return true;
        };
        this.creatArticle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const article = req.body;
                const isValid = this.articleValidate(article);
                if (isValid) {
                    const exist = yield this.verifyArticleByTitle(article.title);
                    if (exist) {
                        res.status(409).send("The article already exists!");
                    }
                    else {
                        const fullArticle = Object.assign(Object.assign({}, article), { createdAt: this.currentDate, updatedAt: this.currentDate });
                        yield (0, connection_1.default)("articles").insert(fullArticle);
                        res.status(201).send("Created Successfully!");
                        9;
                    }
                }
                else {
                    throw new Error("is not valid");
                }
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
        this.deleteArticle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const exist = yield this.verifyArticleById(id);
                if (!exist) {
                    res.status(404).send("the articles dosn't exists!");
                }
                yield (0, connection_1.default)("articles").delete("*").where({ id });
                res.status(200).send("Deleted");
            }
            catch (error) {
                res.status(400).send(error.sqlMessage);
            }
        });
    }
}
exports.default = Article;
