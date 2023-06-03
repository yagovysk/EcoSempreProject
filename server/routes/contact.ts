import express, { Router, Request, Response, NextFunction } from 'express';
import Contact from '../models/contact';
import Middleware from '../auth/middleware';
const contactRoutes: Router = express.Router();




const middleware:Middleware = new Middleware();

contactRoutes.get("/contacts", middleware.handle, async (req: Request, res: Response) => {
    const contact: Contact = new Contact();

    contact.findAll(req, res);
})

contactRoutes.post("/contact", async (req: Request, res: Response) => {
    const contact: Contact = new Contact();

    contact.registerContact(req, res);
})

export default contactRoutes;