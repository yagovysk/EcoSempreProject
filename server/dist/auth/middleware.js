"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Middleware {
    handle(req, res, next) {
        const session = req.session;
        if (process.env.NODE_ENV === "test") {
            next();
            return;
        }
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
}
exports.Middleware = Middleware;
exports.default = Middleware;
