import Connection from "../database/connection";

import Static from "../static";
import { Request, Response } from "express";

interface IArticle{
    title: string,
    author: string,
    content: string

}



class Article{
   private currentDate:string = new Static().getCurrentDate();

    private verifyArticleByTitle = async (title:string) =>{
        const exist:string[] = await Connection("articles").select("*").where({title});

       
        if(exist[0] !== undefined)
        {
            return true;
        }
        return false;
    }
    private articleValidate = (article:IArticle) =>{
        const {title, author, content} = article;

        if(!title || !author || !content)
        {
            return false;
        }
        return true;
    }
   public creatArticle = async(req:Request, res: Response)=>{
        
        try{
            const article:IArticle = req.body;

            const isValid:boolean =  this.articleValidate(article);
            if(isValid)
            {
                const exist:boolean = await this.verifyArticleByTitle(article.title);
                
                if(exist)
                {
                    
                    res.status(409).send("The article already exists!");
                }
                else{
                    const fullArticle:object = {
                        ...article,
                        createdAt: this.currentDate,
                        updatedAt: this.currentDate
                    }
                    
                 await Connection("articles").insert(fullArticle);
                  res.status(201).send("Created Successfully!");
9                }
            }
            else{
                throw new Error("is not valid");
            }

        }
        catch(error:any)
        {
            res.status(400).send(error.sqlMessage)
        }
    }

    public deleteArticle = async (req:Request, res:Response) =>{
        const {id}:{id:string} = req.body; 

        
    }
}


export default Article;