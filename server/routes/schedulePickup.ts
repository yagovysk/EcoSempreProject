import express, { Router, Request, Response, NextFunction } from 'express';
import multer, {StorageEngine, Multer} from 'multer';
import path from 'path'
const scheduleRoutes: Router = express.Router();

import SchedulePickup from '../models/schedulePickUp';

export interface UploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
  }
  

const storage:StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'temp/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });


const upload:Multer= multer({storage, limits: {files: 3}});

scheduleRoutes.post("/schedule-pickup", upload.array("attachments", 3),  async(req:Request, res:Response)=>{

    const schedulePickup: SchedulePickup = new SchedulePickup();
    const files :UploadedFile[] | undefined   = req.files as UploadedFile[];

    if(!files || !Array.isArray(files))
    {
        res.sendStatus(400);
    }

    const attachments:string[] = files.map( (file:any) =>  file.filename);
   schedulePickup.createSchedule(req, res, attachments)
})


export default scheduleRoutes;