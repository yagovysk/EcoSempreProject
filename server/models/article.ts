import Connection from "../database/connection";
import slugify from 'slugify';
import Static from "../static";
import { Request, Response } from "express";

interface IArticle {
    title: string,
    author: string,
    content: string
    slug: string,
    author_id: number
}

class Article {
    private currentDate: string = new Static().getCurrentDate();

    private verifyArticleByTitle = async (title: string) => {
        const exist: string[] = await Connection("articles").select("*").where({ title });


        if (exist[0] !== undefined) {
            return true;
        }
        return false;
    }
    private verifyArticleBySlug = async (slug: string) => {
        const exist: string[] = await Connection("articles").select("*").where({ slug });


        if (exist[0] !== undefined) {
            return true;
        }
        return false;
    }
    private verifyArticleById = async (id: number) => {
        const exist: string[] = await Connection("articles").select("*").where({ id });


        if (exist[0] !== undefined) {
            return true;
        }
        return false;
    }
    private articleValidate = (article: IArticle) => {
        const { title, author, content, author_id } = article;

        if (!title || !author || !content || !author_id) {
            return false;
        }
        return true;
    }
    private verifyPagination = (page ?:string,  limit  ?:string) =>{
        if( limit === undefined || page === undefined)
        {
            return false;
        }
        return true;
    }
    public creatArticle = async (req: Request, res: Response) => {

        try {
            const article: IArticle = req.body;
            const isValid: boolean = this.articleValidate(article);
            if (isValid) {
                const exist: boolean = await this.verifyArticleByTitle(article.title);

                if (exist) {

                    res.status(409).send("The article already exists!");
                }
                else {
                    const fullArticle: object = {
                        ...article,
                        createdAt: this.currentDate,
                        updatedAt: this.currentDate,
                        slug: slugify(article.title)
                    }

                    await Connection("articles").insert(fullArticle);
                    res.status(201).send("Created Successfully!");
                    9
                }
            }
            else {
                throw new Error("is not valid");
            }

        }
        catch (error: any) {
            res.status(400).send(error)
        }
    }

    public deleteArticle = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id)

            const exist: boolean = await this.verifyArticleById(id);

            if (!exist) {
                res.status(404).send("the articles dosn't exists!");
            }

            await Connection("articles").delete("*").where({ id });
            res.status(200).send("Deleted");
        }
        catch (error: any) {
            res.status(400).send(error.sqlMessage);
        }

    }
    public getArticles = async(req:Request, res:Response) =>{
        try{
            const  {limit, page}:{limit ?: string, page ?: string} = req.query;


            // verifying if contain pagination in query
            const pagination:boolean = this.verifyPagination(limit, page);
            if(pagination)
            {
                const offset = (Number(page)-1)*Number(limit)
                const articles: string[] = await Connection("articles").select("*").limit(Number(limit)).offset(Number(offset))

                if(articles [0] === undefined)
                {
                    res.status(404).send("doesn't exists articles");
                }
                res.status(200).send(articles);
            }
            else{
             const articles: string[] = await Connection("articles").select("*");
             
             if (articles[0] === undefined) {
                 res.status(404).send("doesn't exists articles");
             }
             res.status(200).send(articles);
            }
        }
        catch(error:any)
        {
            res.status(400).send(error.sqlMessage)
        }
    }
    public getArticleByKey = async(req:Request, res:Response) =>{

        try{
            const regex:RegExp =  /^\d+$/g;
            const key:string = req.params.key;
            const result: RegExpMatchArray | null = key.match(regex);

            //is string/slug
            if(result === null)
            {
                const exists: boolean = await this.verifyArticleBySlug(key);

                if(exists)
                {
                    const article: boolean = await Connection("articles").select("*").where({slug: key}).first();

                    res.status(200).send(article);
                }
                else{
                    res.sendStatus(404);
                }
            }
            else
            {
                const exists: boolean = await this.verifyArticleById(Number(key));

                if(exists)
                {
                    const article: boolean = await Connection("articles").select("*").where({id: key}).first();

                    res.status(200).send(article);
                }
                else{
                res.sendStatus(404);
                }
            }
            
        }
        catch(error:any)
        {
            res.sendStatus(400);
        }
    }


    public updateArticle = async (req:Request, res:Response) =>{
       
        try{
            const id:number = Number(req.params.id);
            const article:Partial<IArticle> = req.body;
            const exists:boolean = await this.verifyArticleById(id);
            
            const updatedArticle:object = {
                ...article,
                updatedAt: this.currentDate
            }
            if(!exists)
            {
               return res.status(404).send("The articles Doesn't exists");
            }

            await Connection("articles").update(updatedArticle).where({id});

            return res.sendStatus(200);
        }
        catch(error:any)
        {
          return res.sendStatus(400);
        }

    }
}


export default Article;