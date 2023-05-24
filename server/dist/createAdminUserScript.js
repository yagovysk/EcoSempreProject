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
const connection_1 = __importDefault(require("./database/connection"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const static_1 = __importDefault(require("./static"));
dotenv_1.default.config();
function createAdminUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentDate = new static_1.default().getCurrentDate();
        const admin = yield (0, connection_1.default)("users").select("*").where({ nickname: 'admin' }).first();
        const ROUNDS = 10;
        const salt = bcrypt_1.default.genSaltSync(ROUNDS);
        const hashedPassword = bcrypt_1.default.hashSync(process.env.ADMIN_PASSWORD, salt);
        if (admin !== undefined) {
            return;
        }
        else {
            const newAdmin = {
                nickname: process.env.NICKNAME,
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword,
                createdAt: currentDate,
                updatedAt: currentDate
            };
            yield (0, connection_1.default)("users").insert(newAdmin);
            yield (0, connection_1.default)("roles").insert({
                role: 1,
                user_id: 1,
                description: "admin",
                createdAt: currentDate,
                updatedAt: currentDate
            });
            console.log("ADVICE: <===ADMIN CREATED!===>");
        }
    });
}
exports.default = createAdminUser;
