import Connection from "../database/connection";
import { Request, Response } from "express";




export interface IContact{
    name:  string,
    email: string,
    subject: string,
    phone: string,
    message: string
}



class Contact{
    constructor(){}
    registerContact = async (req:Request, res:Response) =>{
        try{
            const newContact:IContact = req.body;

            const contactId = await Connection("contacts").insert(newContact);

            res.status(201).send(contactId);
        }
        catch(error:any){
            console.log("[CONTACT] - ERROR:", error.statusCode)
            res.sendStatus(400);
        }
    }
}

export default Contact;