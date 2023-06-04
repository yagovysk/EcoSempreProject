"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notFoundRoute = express_1.default.Router();
notFoundRoute.get("*", (req, res) => {
    res.sendStatus(404);
});
exports.default = notFoundRoute;
