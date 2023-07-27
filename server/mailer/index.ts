import nodemailer, {Transporter} from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
import Connection from '../database/connection';

interface IConfig{
    host: string
    port: number,
    auth: {
        user: string,
        pass: string
    }
}

interface IPushMessage{
    from: string,
    to: string[] | string,
    subject: string,
    html: string
}

interface NewsletterEmail {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
  }

class Mailer{
    constructor(){}
    private async sendMail(message:IPushMessage){
        try{
            const config:IConfig = {
                host: "smtp.office365.com",
                port: 587,
                auth: {
                    user: process.env.PUSH_EMAIL!,
                    pass: process.env.PUSH_EMAIL_PASS!
                }
            }
            const SUCESS_CODE = 200;
            
            const transporter:Transporter = nodemailer.createTransport(config);
            transporter.sendMail(message, (error: unknown, info: unknown) => {
                if (error)  throw new Error(`ERROR: ${error}`);
                else{
                    console.log("SUCESS?", info)
                    return  SUCESS_CODE;
                }
            })
        }
        catch(error:any){
            const ERROR_CODE= 500;
            return ERROR_CODE;
        }
    }

    public async pushNotification(slug:string){
        const NewsletterEmails:NewsletterEmail[] = await Connection("newsletter").select("*");
        const emails: string[] = NewsletterEmails.map(register => register.email);

        const pushMessage:IPushMessage = {
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
}


export default Mailer;