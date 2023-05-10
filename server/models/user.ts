import { Request, Response } from "express";


import Connection from "../database/connection";



interface IUser {
  nickname: string;
  email: string
  password: string

}
 class User {
     private async verifyUserByEmail(email:string)
    {
        const query: string[] = await Connection("Users").select("*").where({email});

        if(query[0] === undefined)
        {
            return false;
        }
        return true;
    }
  createUser = async (req: Request, res: Response) => {
   
    try{
        const user:IUser = req.body;

        const exist:boolean = await this.verifyUserByEmail(user.email);
    
        if(exist)
        {
            throw new Error("The user already exist");
        }

        const result:string[] = await Connection("Users").insert(user);

        res.status(201).send(`Created! ${result[0]}`)
    }
    catch(error:any)
    {
        res.status(400).send(error.message);
    }
    
  };
}


export default User;
