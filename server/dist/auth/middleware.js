"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function Middleware(req, res, next) {
    const session = req.session;
    if (session.user === undefined) {
        res.status(401).send("unauthorized");
    }
    else {
        const role = session.user.role;
        if (!role) {
            res.status(401).send("unauthorized");
        }
        else {
            next();
        }
    }
}
exports.default = Middleware;
