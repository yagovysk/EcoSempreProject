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
const bcrypt_1 = __importDefault(require("bcrypt"));
const connection_1 = __importDefault(require("../database/connection"));
class User {
    constructor() {
        this.getRole = (email) => __awaiter(this, void 0, void 0, function* () {
            const role = yield (0, connection_1.default)("roles")
                .join("users", "roles.user_id", "=", "users.id")
                .select("roles.*")
                .where("users.email", email)
                .first();
            return role.role;
        });
        this.confirmPassword = (credentails) => __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, connection_1.default)("users").select("*").where({ email: credentails.email }).first();
            // check if the pass is most longer then 8 
            const length = credentails.password.length;
            if (length < 8) {
                return false;
            }
            const correct = bcrypt_1.default.compareSync(credentails.password, user.password);
            if (correct) {
                return true;
            }
            return false;
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const exist = yield this.verifyUserByEmail(user.email);
                if (exist) {
                    throw new Error("The user already exist");
                }
                const hashedPassword = this.hashPassword(user.password);
                user.password = hashedPassword;
                const result = yield (0, connection_1.default)("users").insert(user);
                res.status(201).send(`Created! ${result[0]}`);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const credentials = req.body;
                const session = req.session;
                const exist = yield this.verifyUserByEmail(credentials.email);
                if (exist) {
                    const confirmed = yield this.confirmPassword(credentials);
                    if (confirmed) {
                        const userRole = yield this.getRole(credentials.email);
                        session.user = {
                            role: userRole
                        };
                        return res.status(200).send("ok");
                    }
                    else {
                        res.status(400).send("Incorrect Password");
                    }
                }
                else {
                    res.status(404).send("The user doesn't exist");
                }
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    hashPassword(password) {
        // check if the pass is most longer then 8 
        const length = password.length;
        if (length < 8) {
            throw new Error("the password is short, min length is 8");
        }
        // hashing the pass
        const SALT_ROUNDS = 10;
        const SALT = bcrypt_1.default.genSaltSync(SALT_ROUNDS);
        const hashedPassword = bcrypt_1.default.hashSync(password, SALT);
        return hashedPassword;
    }
    verifyUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield (0, connection_1.default)("users").select("*").where({ email });
            if (query[0] === undefined) {
                return false;
            }
            return true;
        });
    }
}
exports.default = User;
