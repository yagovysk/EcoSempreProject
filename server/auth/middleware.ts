import { Request, Response, NextFunction } from "express"
import dontev from'dotenv';
dontev.config();

import jwt from 'jsonwebtoken';
class Middleware{

    public adminAuth = async(req:Request, res:Response, next:NextFunction) =>{
            // const {id}:{id:string} = req.session.user;

            
    }
}



export default Middleware;