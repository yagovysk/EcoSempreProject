"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const article_1 = __importDefault(require("./article"));
const contact_1 = __importDefault(require("./contact"));
const Routes = express_1.default.Router();
Routes.use("/", user_1.default);
Routes.use("/", contact_1.default);
Routes.use("/", article_1.default);
exports.default = Routes;
