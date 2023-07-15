"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const tag_1 = __importDefault(require("./routes/tag"));
const article_1 = __importDefault(require("./routes/article"));
const contact_1 = __importDefault(require("./routes/contact"));
const newsletter_1 = __importDefault(require("./routes/newsletter"));
const createAdminUserScript_1 = __importDefault(require("./createAdminUserScript"));
const categoryCollectionPoints_1 = __importDefault(require("./routes/categoryCollectionPoints"));
// setup admin
(0, createAdminUserScript_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use("/api/v1", user_1.default);
app.use("/api/v1", article_1.default);
app.use("/api/v1", contact_1.default);
app.use("/api/v1", tag_1.default);
app.use("/api/v1", newsletter_1.default);
app.use("/api/v1", categoryCollectionPoints_1.default);
exports.default = app;
