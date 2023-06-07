"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Middleware {
    handle(req, res, next) {
        const authorization = req.headers['authorization'] || '';
        const token = authorization.split(" ")[1];
        if (process.env.NODE_ENV === "test") {
            next();
            return;
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            if (typeof decoded === 'object') {
                const exp = decoded.exp;
                const currentTime = Math.floor(Date.now() / 1000);
                if (currentTime > exp) {
                    res.sendStatus(498);
                }
                else {
                    next();
                }
            }
        }
        catch (error) {
            res.sendStatus(400);
        }
    }
}
exports.Middleware = Middleware;
exports.default = Middleware;
