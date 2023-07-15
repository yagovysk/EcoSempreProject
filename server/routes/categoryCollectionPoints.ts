import express, { Router, Request, Response } from 'express';
import CategoryCollectionPoints from '../models/categoryCollectionPoints';
import Middleware from '../auth/middleware';
const tagRoutes: Router = express.Router();




const middleware:Middleware = new Middleware();

tagRoutes.post("/category-collection-points", async(req:Request, res:Response)=>{
    const categoryCollectionPoints:CategoryCollectionPoints = new CategoryCollectionPoints();

    categoryCollectionPoints.createCategory(req, res);
})


export default tagRoutes;