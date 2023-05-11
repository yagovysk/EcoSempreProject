import { Request, Response } from "express";
import dotenv from 'dotenv';
import app from "./server";
dotenv.config();
const PORT:number =  Number(process.env.PORT) || 8080;



app.listen(PORT, () => console.log(`running on port: ${PORT}`));