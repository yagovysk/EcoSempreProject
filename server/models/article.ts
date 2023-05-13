import Connection from "../database/connection";

import Static from "../static";
import { Request, Response} from "express";

interface IArticle{
    title: string,
    author: string,
    content: string
    author_id:  number
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
    private verifyArticleById = async (id:number) =>{
        const exist:string[] = await Connection("articles").select("*").where({id});

       
        if(exist[0] !== undefined)
        {
            return true;
        }
        return false;
    }
    // reavaliate this private method, may be unnecessary
    private articleValidate = (article:IArticle) =>{
        const {title, author, content, author_id} = article;

        if(!title || !author || !content || !author_id)
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
            res.status(400).send(error)
        }
    }

    public deleteArticle = async (req:Request, res:Response) =>{
        try{
            const id = Number(req.params.id)
        
           const exist:boolean = await this.verifyArticleById(id);

           if(!exist)
           {
            res.status(404).send("the articles dosn't exists!");
           }

             await Connection("articles").delete("*").where({id});
            res.status(200).send("Deleted");
        }
        catch(error:any)
        {
            res.status(400).send(error.sqlMessage);
        }
        

    }
}


export default Article;