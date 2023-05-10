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
class User {
    constructor() {
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const exist = yield this.verifyUserByEmail(user.email);
                if (exist) {
                    throw new Error("The user already exist");
                }
                const result = yield (0, connection_1.default)("Users").insert(user);
                res.status(201).send(`Created! ${result[0]}`);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    verifyUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield (0, connection_1.default)("Users").select("*").where({ email });
            if (query[0] === undefined) {
                return false;
            }
            return true;
        });
    }
}
exports.default = User;
