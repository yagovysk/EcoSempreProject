import { Request, Response } from "express";

import Connection from "../database/connection";
import Static from "../static";

class Newsletter {
    constructor() { }
    private currentDate: string = new Static().getCurrentDate();
    public async registerEmail(req: Request, res: Response) {
        try {
            const pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            const email: string = req.body;
            if (pattern.test(email)) {
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