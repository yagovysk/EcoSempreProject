import { Request, Response } from "express";

import Connection from "../database/connection";
import Static from "../static";

class Newsletter {
    constructor() { }
    private currentDate: string = new Static().getCurrentDate();
    private async verifyEmail(email: string) {
        const query: object | undefined = await Connection("newsletter").select("*").where({ email }).first();

        if (query === undefined ) {
            return false;
        }
        return true;
    }
    private validateEmail(email: string) {
        const pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (pattern.test(email)) {
            return true;
        }
        return false;
    }
    public async getAll(req:Request, res:Response)
    {
        try{
            const query:string[]= await Connection("newsletter").select("*");

            if(query[0] === undefined || query === null)
            {
               return res.sendStatus(404);
            }
            else{
                res.status(200).send(query);
            }
        }
        catch(error:any)
        {
            res.sendStatus(400);
        }
    }
    public async registerEmail(req: Request, res: Response) {
        try {


            const {email}: {email:string} = req.body;
            const isValid: boolean = this.validateEmail(email);
            if (isValid) {
                const exist: boolean = await this.verifyEmail(email);
                if (exist) {
                   return res.status(409).send("The e-mail already is registered!!!")
                }
                else {
                    await Connection("newsletter").insert({
                        email,
                        createdAt: this.currentDate,
                        updatedAt: this.currentDate
                    })
                    res.sendStatus(201);
                }
            }
         else{
            res.sendStatus(400);
         }
        

        }
        catch (error: any) {
            res.sendStatus(400);

        }
    }
    public async deleteEmail(req:Request, res:Response)
    {
        try{
            const {email}:{email:string} = req.body;
        const isValid:boolean = this.validateEmail(email);

        const exist:boolean = await this.verifyEmail(email);
        if(isValid)
        {
            if(exist)
            {
                await Connection("newsletter").delete("*").where({email});
                res.sendStatus(200);
            }
            else{
                res.sendStatus(404);
            }
        }
        else{
            throw new Error("invalid E-mail");
        }
        }
        catch(error:any)
        {
            res.sendStatus(400);
        }
    }

}



export default Newsletter;