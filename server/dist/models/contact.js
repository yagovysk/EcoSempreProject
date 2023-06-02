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
const static_1 = __importDefault(require("../static"));
class Contact {
    constructor() {
        this.currentDate = new static_1.default().getCurrentDate();
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const contacts = yield (0, connection_1.default)("contacts").select("*");
                yield connection_1.default.destroy();
                res.status(200).send(contacts);
            }
            catch (error) {
                res.sendStatus(400);
            }
        });
        this.registerContact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newContact = req.body;
                const fullContact = Object.assign(Object.assign({}, newContact), { createdAt: this.currentDate });
                const contactId = yield (0, connection_1.default)("contacts").insert(fullContact);
                yield connection_1.default.destroy();
                res.status(201).send(contactId);
            }
            catch (error) {
                res.sendStatus(400);
            }
        });
    }
}
exports.default = Contact;
