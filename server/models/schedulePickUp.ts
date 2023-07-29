import { Request, Response } from "express";
import path from 'path';
import fs from 'fs';


import Mailer from "../mailer";


interface ISchedulePickup {
    name: string;
    email: string;
    phone: string;
    cep: string;
    state: string;
    city: string;
    materials: string;
}


export interface ScheduleMessage {
    from: string
    to: string;
    subject: string;
    html: string;
    attachments: Attachment[]
}

export interface Attachment {
    filename: string;
    path: string;
}

class SchedulePickup {
    constructor() { }

   

    public async createSchedule(req: Request, res: Response, attachments: string[]) {
        try {
            const mailer: Mailer = new Mailer();
            const scheduleData: ISchedulePickup = req.body;
            const attachmentsInfo: Attachment[] = attachments.map((filename) => ({
                filename: path.basename(filename),
                path: path.join('temp', filename),
            }));

            const html: string = `
            <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Solicitação de Agendamento de Retirada de Materiais</title>
</head>
<body>

    <p>Um novo agendamento de coleta foi feito</p>

    <p>para mais informações leia os dados abaixo e as imagens anexadas:</p>

    <ul>
        <li><strong>Nome/Nome da empresa:</strong> ${scheduleData.name}</li>
        <li><strong>E-mail:</strong> ${scheduleData.email}</li>
        <li><strong>Telefone:</strong>${scheduleData.phone}</li>
        <li><strong>CEP:</strong> ${scheduleData.cep}</li>
        <li><strong>Estado:</strong> ${scheduleData.state}</li>
        <li><strong>Cidade:</strong> ${scheduleData.city} </li>
        <li><strong>Lista de Materiais e quantidade:</strong>${scheduleData.materials}</li>
    </ul>


    <p style="font-weight: bold;">Não responda este e-mail, o mesmo foi enviado de forma automatizada</p>

</body>
</html>

            `
        

            const message: ScheduleMessage = {
                from: process.env.PUSH_EMAIL!,
                to: process.env.PICKUP_TARGET_EMAIL!,
                subject: "Agendamento de Coleta",
                html,
                attachments: attachmentsInfo
            }

            const sended: boolean = await mailer.pushSchedulePickup(message);


            if (sended) {
                res.sendStatus(200);
            }
            else {
                throw new Error('an error has ocorred' + status);
            }
        }
        catch (error: any) {
            res.status(400).send(error.message);
        }

    }

}

export default SchedulePickup;
