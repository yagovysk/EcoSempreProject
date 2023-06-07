import Connection from "../database/connection";
import { Request, Response } from "express";


import Static from "../static";



export interface IContact {
    name: string,
    email: string,
    subject: string,
    phone: string,
    message?: string,
    createdAt?: string
}



class Contact {
    constructor() { }
    private currentDate: string = new Static().getCurrentDate();
    private verifyContact = async (id: number) => {
        const result: string[] = await Connection("contacts").select().where({ id }).first();

        if (result === undefined) {
            return false;
        }
        return true;
    }
    private verifyPagination = (page?: string, limit?: string) => {
        if (limit === undefined || page === undefined) {
            return false;
        }
        return true;
    }


    public deleteContactByid = async (req: Request, res: Response) => {
        try {
            const id: number = Number(req.params.id);

            const exists: boolean = await this.verifyContact(id);

            if (!exists) {
                res.sendStatus(404);
            }

            const contactId: string[] = await Connection("contacts").delete("*").where({ id })

            res.sendStatus(200);
        }
        catch (error: any) {
            res.status(400);
        }

    }
    public getContactById = async (req: Request, res: Response) => {
        try {
            const id: number = Number(req.params.id);

            const exists: boolean = await this.verifyContact(id);

            if (!exists) {
                res.sendStatus(404);
            }

            const contact: string[] = await Connection("contacts").select().where({ id }).first();

            res.status(200).send(contact);
        }
        catch (error: any) {
            console.log(error)
            res.status(400).send(error)
        }

    }
    public getAll = async (req: Request, res: Response) => {
        try {
            const { limit, page }: { limit?: string, page?: string } = req.query;


            const pagination: boolean = this.verifyPagination(limit, page);

            if (pagination) {
                const offset: number = (Number(page) - 1) * Number(limit);
                const contacts: string[] = await Connection("contacts").select("*").limit(Number(limit)).offset(offset);

                if (contacts[0] === undefined) {
                    await Connection.destroy();
                    res.status(404).send("doesn't exists contacts");

                }
                else {
                    await Connection.destroy();
                    res.status(200).send(contacts)
                }
            }
            else {

                const contacts: string[] = await Connection("contacts").select("*");


                res.status(200).send(contacts);
            }
        }
        catch (error: any) {
            res.sendStatus(400);
        }
    }

    public registerContact = async (req: Request, res: Response) => {
        try {
            const newContact: IContact = req.body;
            const fullContact: IContact = {
                ...newContact,
                createdAt: this.currentDate
            }
            const contactId = await Connection("contacts").insert(fullContact);

            res.status(201).send(contactId);
        }
        catch (error: any) {
            res.sendStatus(400);
        }

    }
}

export default Contact;