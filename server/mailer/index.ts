import nodemailer, {Transporter} from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
dotenv.config();

import SchedulePickup, { ScheduleMessage, Attachment } from '../models/schedulePickUp';
import Connection from '../database/connection';

interface IConfig{
    host: string
    port: number,
    auth: {
        user: string,
        pass: string
    }
}

interface IEmailMessage{
    from: string,
    to: string[] | string,
    subject: string,
    html: string,
}

interface NewsletterEmail {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
  }





class Mailer{
    constructor(){}

    private removeTemporaryAttachments(filePaths: Attachment[]) {
        filePaths.forEach((attachment) => {
          const filePath = attachment.path;
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error(`Error deleting file ${filePath}: ${err.message}`);
            } else {
              console.log(`File ${filePath} deleted successfully.`);
            }
          });
        });
      }
      
    private async sendMail(message: IEmailMessage): Promise<number> {
        try {
            const config: IConfig = {
                host: "smtp.office365.com",
                port: 587,
                auth: {
                    user: process.env.PUSH_EMAIL!,
                    pass: process.env.PUSH_EMAIL_PASS!
                }
            };
            const SUCCESS_CODE: number = 200;
    
            const transporter: Transporter = nodemailer.createTransport(config);
    
            return new Promise((resolve, reject) => {
                transporter.sendMail(message, (error: unknown, info: unknown) => {
                    if (error) {
                        reject(new Error(`ERROR: ${error}`));
                    } else {
                        resolve(SUCCESS_CODE);
                    }
                });
            });
        } catch (error) {
            const ERROR_CODE: number = 500;
            return ERROR_CODE;
        }
    }
    

    public async pushNotification(slug:string){
        const NewsletterEmails:NewsletterEmail[] = await Connection("newsletter").select("*");
        const emails: string[] = NewsletterEmails.map(register => register.email);

        const pushMessage:IEmailMessage = {
            from: process.env.PUSH_EMAIL!,
            to: emails,
            subject:  "Nova publicação no blog da Eco Sempre",
            html: `olá, veja a publicação <a href="http://ecosempre/${slug}">aqui</a>`
        }

        const result:number = Number(this.sendMail(pushMessage));
        let attempts = 3;


        if(result == 500)
        {
            attempts--;
            if(attempts > 0)
            {
                this.pushNotification(slug);

            }
            else{
                return false;
            }
        }
        else{
            return true;
        }

    }
    public async pushSchedulePickup(message: ScheduleMessage): Promise<boolean> {
        try {
            const schedulePickup:SchedulePickup = new SchedulePickup();
            const result: number = await this.sendMail(message);
            let attempts = 3;
    
            if (result === 500) {
                attempts--;
                if (attempts > 0) {
                    return this.pushSchedulePickup(message);
                } else {
                    return false;
                }
            } else {
                this.removeTemporaryAttachments(message.attachments)
                return true;
            }
        } catch (error) {
            this.removeTemporaryAttachments(message.attachments)
            return false;
        }
    }
    
}


export default Mailer;