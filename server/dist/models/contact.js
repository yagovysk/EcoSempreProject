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
        this.verifyContact = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, connection_1.default)("contacts").select().where({ id }).first();
            if (result === undefined) {
                return false;
            }
            return true;
        });
        this.verifyPagination = (page, limit) => {
            if (limit === undefined || page === undefined) {
                return false;
            }
            return true;
        };
        this.deleteContactByid = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const exists = yield this.verifyContact(id);
                if (!exists) {
                    res.sendStatus(404);
                }
                const contactId = yield (0, connection_1.default)("contacts").delete("*").where({ id });
                res.sendStatus(200);
            }
            catch (error) {
                res.status(400);
            }
        });
        this.getContactById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const exists = yield this.verifyContact(id);
                if (!exists) {
                    res.sendStatus(404);
                }
                const contact = yield (0, connection_1.default)("contacts").select().where({ id }).first();
                res.status(200).send(contact);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { limit, page } = req.query;
                const pagination = this.verifyPagination(limit, page);
                if (pagination) {
                    const offset = (Number(page) - 1) * Number(limit);
                    const contacts = yield (0, connection_1.default)("contacts").select("*").limit(Number(limit)).offset(offset);
                    if (contacts[0] === undefined) {
                        yield connection_1.default.destroy();
                        res.status(404).send("doesn't exists contacts");
                    }
                    else {
                        yield connection_1.default.destroy();
                        res.status(200).send(contacts);
                    }
                }
                else {
                    const contacts = yield (0, connection_1.default)("contacts").select("*");
                    res.status(200).send(contacts);
                }
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
                res.status(201).send(contactId);
            }
            catch (error) {
                res.sendStatus(400);
            }
        });
    }
}
exports.default = Contact;
