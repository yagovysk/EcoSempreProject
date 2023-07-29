import express, { Router, Request, Response } from 'express';
import SchedulePickup from '../models/schedulePickUp';
import multer, {DiskStorageOptions} from 'multer';
import path from 'path';
const scheduleRoutes: Router = express.Router();

// Configuração do Multer para armazenar as imagens temporariamente
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'temp/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage: storage,
    limits: { files: 3 }
  });



scheduleRoutes.post("/schedule-pickup", upload.array("attachments", 3), async (req:Request, res:Response)=>{
    const schedulePickup:SchedulePickup = new SchedulePickup();
    const attachments:string[] = req.files?.map((file)=> file.filename)
    schedulePickup.createSchedule(req, res, attachments);
})


export default scheduleRoutes;