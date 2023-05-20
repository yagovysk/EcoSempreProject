import Connection from "./database/connection";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

import Static from "./static";

dotenv.config();

interface IUser {
  nickname: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

async function createAdminUser() {
 
        const currentDate = new Static().getCurrentDate();

        const admin: object = await Connection("users").select("*").where({ nickname: 'admin' }).first();
        const ROUNDS = 10
        const salt:string = bcrypt.genSaltSync(ROUNDS);
        const hashedPassword =  bcrypt.hashSync(process.env.ADMIN_PASSWORD!, salt)
        if (admin !== undefined) {
          return;
        } else {
          const newAdmin: IUser = {
            nickname: process.env.NICKNAME!,
            email: process.env.ADMIN_EMAIL!,
            password: hashedPassword,
            createdAt: currentDate,
            updatedAt: currentDate
          };
      
          await Connection("users").insert(newAdmin);
          await Connection("roles").insert({
            role: 1,
            user_id: 1,
            description: "admin",
            createdAt: currentDate,
            updatedAt: currentDate
          });

          console.log("ADVICE: <===ADMIN CREATED!===>");
        }
    
 
}


export default createAdminUser;