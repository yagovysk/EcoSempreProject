import express, { Router, Request, Response } from 'express';
import Tag from '../models/tag';
import Middleware from '../auth/middleware';
const tagRoutes: Router = express.Router();




const middleware:Middleware = new Middleware();

tagRoutes.post("/tag", async(req:Request, res:Response)=>{
    const tag:Tag = new Tag();
    tag.createTag(req, res);
})



export default tagRoutes;