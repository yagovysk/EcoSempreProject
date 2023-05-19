import express, { Router, Request, Response,NextFunction }  from 'express';
import User from '../models/user';
import Article from '../models/article';
import Middleware from '../auth/middleware';
const Routes:Router = express.Router();



Routes.post("/user", async(req:Request, res:Response)=>{
    const user:User = new User();
    user.createUser(req, res);
})


Routes.post("/authentication",   async (req:Request, res:Response) =>{

    const user:User = new User();

    user.login(req, res);

})

// articles
Routes.get("/articles", async(req:Request, res:Response)=>{
    const article:Article = new Article();
    article.getArticles(req, res);
})
Routes.post("/article", async(req:Request, res:Response)=>{
    const article:Article = new Article();
    article.creatArticle(req, res);
    
})

Routes.get("/article/:key", async(req:Request, res:Response) =>{
    const article:Article = new Article();
    article.getArticleByKey(req, res);
})
Routes.delete("/article/:id", async(req:Request, res:Response) =>{
    const article:Article = new Article();
    article.deleteArticle(req, res);
})
Routes.put("/article/:id", async(req:Request, res:Response) =>{
    const article:Article = new Article();
    article.updateArticle(req, res);
})
export default Routes;