import express, { Router, Request, Response }  from 'express';
import {User} from '../models/user';
const Routes:Router = express.Router();



Routes.post("/user", async(req:Request, res:Response)=>{
    const user:any = new User();

    user.createUser(req, res);
})


export default Routes;