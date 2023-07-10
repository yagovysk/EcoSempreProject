import { Request, Response } from "express";

import Connection from "../database/connection";
import Static from "../static";

class Newsletter {
    constructor() { }
    private currentDate: string = new Static().getCurrentDate();
    private async verifyEmail(email: string) {
        const query: object | undefined = await Connection("newsletter").select("*").where({ email });

        if (query !== undefined) {
            return true;
        }
        return false;
    }
    private validateEmail(email: string) {
        const pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (pattern.test(email)) {
            return true;
        }
        return false;
    }
    public async registerEmail(req: Request, res: Response) {
        try {


            const email: string = req.body;

            const isValid: boolean = this.validateEmail(email);
            if (isValid) {
                const exist: boolean = await this.verifyEmail(email);
                if (exist) {
                    res.status(409).send("The e-mail already is registered!!!")
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

        }
        catch (error: any) {
            res.sendStatus(400);

        }
    }
    public async deleteEmail(req:Request, res:Response)
    {
        try{
            const email:string = req.body;

        const isValid:boolean = this.validateEmail(email);
        const exist:boolean = await this.verifyEmail(email);
        if(isValid)
        {
            if(exist)
            {
                await Connection.delete("*").where({email}).first();
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