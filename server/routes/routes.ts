import express, { Router, Request, Response }  from 'express';
import User from '../models/user';
import Article from '../models/article';
const Routes:Router = express.Router();



Routes.post("/user", async(req:Request, res:Response)=>{
    const user:User = new User();
    user.createUser(req, res);
})


Routes.post("/authentication",  async (req:Request, res:Response) =>{

    const user:User = new User();

    user.login(req, res);

})

// articles
Routes.post("/article", async(req:Request, res:Response)=>{
    const article:Article = new Article();
    article.creatArticle(req, res);
})

export default Routes;