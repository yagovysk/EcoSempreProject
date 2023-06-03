import express, { Router, Request, Response} from 'express';
const notFoundRoute: Router = express.Router();


notFoundRoute.get("*", (req:Request, res:Response) =>{
    res.sendStatus(404);
})


export default notFoundRoute;