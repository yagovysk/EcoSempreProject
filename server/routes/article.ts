import express, { Router, Request, Response, NextFunction } from 'express';
import Article from '../models/article';
import Middleware from '../auth/middleware';
const articleRoutes: Router = express.Router();




const middleware:Middleware = new Middleware();

articleRoutes.get("/articles",  async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.getArticles(req, res);
})
articleRoutes.post("/article", middleware.handle, async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.creatArticle(req, res);

})

articleRoutes.get("/article/:key", async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.getArticleByKey(req, res);
})
articleRoutes.delete("/article/:id", middleware.handle, async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.deleteArticle(req, res);
})
articleRoutes.put("/article/:id", middleware.handle, async (req: Request, res: Response) => {
    const article: Article = new Article();
    article.updateArticle(req, res);
})


export default articleRoutes;