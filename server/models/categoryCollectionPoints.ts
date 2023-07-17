import { Request, Response } from "express";

import Connection from "../database/connection";
import Static from "../static";


interface ICategoryCollectionPoints{
    name: string,
    createdAt?: string,
    updatedAt?: string,

}

class CategoryCollectionPoints{
    constructor(){}
    private currentDate: string = new Static().getCurrentDate();

    private async verifyCategoryByname(name:string)
    {
        const query:object | undefined =  await Connection("categoryCollectionPoints").select("*").where({name}).first();

        if(query === undefined)
        {
            return false;
        }
        return true;
    }
    public async createCategory(req:Request, res:Response)
    {
        try{
        const newCategory:ICategoryCollectionPoints = req.body;

        const category: ICategoryCollectionPoints = {
            ...newCategory,
            createdAt: this.currentDate,
            updatedAt: this.currentDate
        }

        if(category.name === "" || category.name === undefined)
        {
            throw new Error("invalid")
        }
        const alreadyExist:boolean = await this.verifyCategoryByname(category.name);

        if(alreadyExist)
        {
            res.sendStatus(409);
        }
        else{
            await Connection("categoryCollectionPoints").insert(category);

            res.sendStatus(201);
        }
        }
        catch(error:any)
        {
            res.status(400).send(error.message);
        }
    }

}

export default CategoryCollectionPoints;