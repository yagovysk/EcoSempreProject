import { Request, Response } from 'express';

import Connection from '../database/connection';
import Static from '../static';


interface ITag{
    name: string;
    createdAt?: string,
    updatedAt?: string
}



class Tag{
    constructor(){};
    private currentDate:string  = new Static().getCurrentDate();
    private async verifyTagByName (name:string)
    {
        const tag:object | undefined = await Connection("tags").select("*").where({name}).first();

        if(tag === undefined )
        {
            return false;
        }
        return true;
    }
    private async verifyTagById (id:number)
    {
        const tag:object | undefined = await Connection("tags").select("*").where({id}).first();

        if(tag === undefined )
        {
            return false;
        }
        return true;
    }
   public async createTag (req:Request, res:Response){
    try{
        const {name}:{name:string} = req.body;

        const fullTag:ITag = {
            name,
            createdAt: this.currentDate,
            updatedAt: this.currentDate
        }
    const exists:boolean = await this.verifyTagByName(name);

    if(!exists)
    {
        const tagId:number = await Connection("tags").insert(fullTag);

        res.status(201).send(tagId);
    }
    else{
        res.sendStatus(409);
    }
    }
    catch(error:any)
    {
        res.sendStatus(400);
    }
    }

    public async deleteTag(req:Request, res:Response){
        try{
            const {tag_id}:{tag_id:string} = req.body;
            const id:number = Number(tag_id)
            if(id <= 0)
            {
                throw new Error("invalid id");
            }
            const exist:boolean = await this.verifyTagById(id);

            if(exist)
            {
                await Connection("tags").delete("*").where({id});
                res.sendStatus(200);
            }else{
                res.sendStatus(404);
            }
        }
        catch(error:any)
        {
            res.sendStatus(400);
        }
    }
    public async getTags(req:Request, res:Response){
        try{
            const tags:string[] = await Connection("tags").select("*");

        if(tags[0] === undefined)
        {
            res.sendStatus(404);
        }
        else{
            res.status(200).send(tags)
        }
        }
        catch(error:any)
        {
            res.sendStatus(400);
        }
    }

}

export default Tag;