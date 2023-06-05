import express, { Router, Request, Response } from 'express';
import Contact from '../models/contact';
import Middleware from '../auth/middleware';
const contactRoutes: Router = express.Router();




const middleware:Middleware = new Middleware();

contactRoutes.get("/contacts", middleware.handle, async (req: Request, res: Response) => {
    const contact: Contact = new Contact();

    contact.getAll(req, res);
})
contactRoutes.delete("/contact/:id", middleware.handle, async(req:Request, res:Response)=>{
    const contact:Contact = new Contact();

    contact.deleteContactByid(req, res);
})
contactRoutes.get("/contact/:id", middleware.handle, async(req:Request, res:Response)=>{
    const contact:Contact = new Contact();

    contact.getContactById(req, res);
})
contactRoutes.post("/contact", async (req: Request, res: Response) => {
    const contact: Contact = new Contact();

    contact.registerContact(req, res);
})

export default contactRoutes;