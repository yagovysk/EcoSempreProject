import { Request, Response } from "express";

import Connection from "../database/connection";
import Static from "../static";


interface ICollectionPoint{
    name: string,
    address: string,
    cep: string
    category_id: number,
    state: string
    size: string
    createdAt?:string,
    updatedAt?:string
}



class CollectionPoint{
    constructor(){}
    private currentDate:string = new Static().getCurrentDate();

    private async checkCollectionPointsExistence(cep:string)
    {
        const query:object | undefined = await Connection("collectionPoints").select("*").where({cep}).first();

        if(query === undefined)
        {
            return false;
        }
        return true;
    }
    private async checkCategorysExistence(category_id:number)
    {
        const query:object | undefined = await Connection("categoryCollectionPoints").select("*").where({id:category_id}).first();

        if(query === undefined)
        {
            return false;
        }
        return true;
    }
    public async getAll(req:Request, res:Response){
        try{
            const collectionPoints:string[] = await Connection("collectionPoints").select("*");

        if(collectionPoints[0] === undefined)
        {
            res.sendStatus(404);
        }
        else{
            res.status(200).send(collectionPoints);
        }
        }
        catch(error:any)
        {
            res.sendStatus(400);
        }
    }
    public async createCollectionPoint(req:Request,res:Response){
       try{
        const collectionPointIncomplete:ICollectionPoint = req.body;
        const collectionPoint:ICollectionPoint = {
            ...collectionPointIncomplete,
            createdAt: this.currentDate,
            updatedAt: this.currentDate
        }
        const alreadyExist:boolean = await this.checkCollectionPointsExistence(collectionPoint.cep);

        if(alreadyExist)
        {
            res.sendStatus(409);
        }
        else{
            const categoryExist:boolean = await this.checkCategorysExistence(Number(collectionPoint.category_id));

            if(categoryExist)
            {
                await Connection("collectionPoints").insert(collectionPoint);

                res.sendStatus(201);
            }
            else{
                throw new Error("the category doesn't exist");
            }
        }
    
       }
       catch(error:any)
       {
        res.status(400).send(error.message);
       }
    }
}

export default CollectionPoint;
