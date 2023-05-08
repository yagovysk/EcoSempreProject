"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const host = "172.17.0.2";
const port = 3306;
const user = "root";
const database = "ecoSempre";
const knexConfig = {
    client: "mysql2",
    connection: {
        host,
        port,
        user,
        password: process.env.DB_PASSWORD,
        database
    }
};
const Connection = (0, knex_1.default)(knexConfig);
exports.default = Connection;
