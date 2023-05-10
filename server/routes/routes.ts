import express, { Router, Request, Response }  from 'express';
import User from '../models/user';
import Article from '../models/article';
const Routes:Router = express.Router();



Routes.post("/user", async(req:Request, res:Response)=>{
    const user:any = new User();
    user.createUser(req, res);
})

// articles
Routes.post("/article", async(req:Request, res:Response)=>{
    const article: any = new Article();
    article.creatArticle(req, res);
})

export default Routes;