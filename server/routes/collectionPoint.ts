import express, { Router, Request, Response } from 'express';
import CollectionPoint from '../models/collectionPoint';
import Middleware from '../auth/middleware';
const collectionPointRoutes: Router = express.Router();




const middleware:Middleware = new Middleware();

collectionPointRoutes.post("/collection-point", async(req:Request, res:Response)=>{
    const collectionPoint:CollectionPoint = new CollectionPoint();

    collectionPoint.createCollectionPoint(req, res);
})
collectionPointRoutes.get("/collection-points", async(req:Request,res:Response)=>{
    const collectionPoint:CollectionPoint = new CollectionPoint();

    collectionPoint.getAll(req, res);
})

export default collectionPointRoutes;