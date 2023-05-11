"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.SESSION;
const maxAge = 200000000;
if (!secret) {
    throw new Error('Variável de ambiente SESSION não está definida');
}
const Session = (0, express_session_1.default)({
    secret: secret,
    cookie: {
        maxAge
    }
});
exports.default = Session;
