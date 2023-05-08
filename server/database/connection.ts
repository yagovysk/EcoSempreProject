import knex, {Knex, } from 'knex';
import dotenv from 'dotenv';
dotenv.config();
const host:string = "172.17.0.2";
const port:number = 3306;
const user:string = "root";
const database:string = "ecoSempre";
const knexConfig: Knex.Config = {
    client: "mysql2",
    connection:{
        host,
        port,
        user,
        password: process.env.DB_PASSWORD,
        database
    }
}

const Connection:Knex = knex(knexConfig);


export default Connection;