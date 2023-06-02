import express, { Router, Request, Response, NextFunction } from 'express';
import User from '../models/user';
import Article from '../models/article';
import Contact from '../models/contact';
import Middleware from '../auth/middleware';
const Routes: Router = express.Router();




const middleware:Middleware = new Middleware();

Routes.post("/authentication", async (req: Request, res: Response) => {

    const user: User = new User();

    user.login(req, res);

})
Routes.post("/user", middleware.handle, async (req: Request, res: Response) => {
    const user: User = new User();
    user.createUser(req, res);
})

// contact

Routes.post("/contact", async (req: Request, res: Response) => {
    const contact: Contact = new Contact();

    contact.registerContact(req, res);
})

// articles
Routes.get("/articles", middleware.handle, async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.getArticles(req, res);
})
Routes.post("/article", middleware.handle, async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.creatArticle(req, res);

})

Routes.get("/article/:key", middleware.handle, async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.getArticleByKey(req, res);
})
Routes.delete("/article/:id", middleware.handle, async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.deleteArticle(req, res);
})
Routes.put("/article/:id", middleware.handle, async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.updateArticle(req, res);
})

export default Routes;