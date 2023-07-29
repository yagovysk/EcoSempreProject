import { Request, Response } from "express";

import Mailer from "../mailer";


interface ISchedulePickup{
    name: string;
    email: string;
    phone: string;
    cep: string;
    state: string;
    city: string;
    materials: string;
    attachments?: string[]
}

export interface ScheduleMessage{
    from: string;
    to: string;
    subject: string;
    html: string;
    attachments: string[] | object;
  }


class SchedulePickup{
    constructor(){}
    

    public async createSchedule(req:Request, res:Response, attachments:string[])
    {
        try{
            const mailer:Mailer = new Mailer(); 
            const scheduleData:ISchedulePickup = req.body;
           
            
        }
        catch(error:any)
        {
            res.sendStatus(400);
        }

    }

}

export default SchedulePickup;
