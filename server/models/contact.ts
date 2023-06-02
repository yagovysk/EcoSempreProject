import Connection from "../database/connection";
import { Request, Response } from "express";


import Static from "../static";



export interface IContact{
    name:  string,
    email: string,
    subject: string,
    phone: string,
    message: string,
    createdAt?:string
}



class Contact{
    constructor(){}
    private currentDate:string = new Static().getCurrentDate();

    public findAll = async (req:Request, res:Response) =>{
        try{    
            const contacts:string[] = await Connection("contacts").select("*");
            await Connection.destroy();

            res.status(200).send(contacts);       
        }
        catch(error:any){
            res.sendStatus(400);
        }
    }
    
    public registerContact = async (req:Request, res:Response) =>{
        try{
            const newContact:IContact = req.body;
            const fullContact:IContact = {
                ...newContact,
                createdAt: this.currentDate
            }
            const contactId = await Connection("contacts").insert(fullContact);

            await Connection.destroy();

            res.status(201).send(contactId);
        }
        catch(error:any){
            res.sendStatus(400);
        }
    }
}

export default Contact;