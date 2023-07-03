import { Request, Response } from "express";

import Connection from "../database/connection";
import Static from "../static";

class Newsletter {
    constructor() { }
    private currentDate: string = new Static().getCurrentDate();
    private validateEmail(email:string){
        const pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(pattern.test(email))
        {
            return true;
        }
        return false;
    }
    public async registerEmail(req: Request, res: Response) {
        try {
            

            const email: string = req.body;

            const isValid:boolean = this.validateEmail(email);
            if (isValid) {
                await Connection("newsletter").insert({
                    email,
                    createdAt: this.currentDate,
                    updatedAt: this.currentDate
                })
                res.sendStatus(201);
            }
        }
        catch (error: any) {
            res.sendStatus(400);

        }
    }
}



export default Newsletter;