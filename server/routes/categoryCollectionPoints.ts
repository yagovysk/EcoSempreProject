import express, { Router, Request, Response } from 'express';
const categoryRoutes: Router = express.Router();
import CategoryCollectionPoints from '../models/categoryCollectionPoints';


import Middleware from '../auth/middleware';






const middleware:Middleware = new Middleware();

categoryRoutes.post("/category-collection-points", async(req:Request, res:Response)=>{
    const categoryCollectionPoints:CategoryCollectionPoints = new CategoryCollectionPoints();

    categoryCollectionPoints.createCategory(req, res);
})


export default categoryRoutes;