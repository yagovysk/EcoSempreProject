import express, { Router, Request, Response, NextFunction } from 'express';
import User from '../models/user';
import Middleware from '../auth/middleware';
const userRoutes: Router = express.Router();

const middleware:Middleware = new Middleware();

userRoutes.post("/authentication", async (req: Request, res: Response) => {

    const user: User = new User();

    user.login(req, res);

})
userRoutes.post("/user",middleware.handle, async (req: Request, res: Response) => {
    const user: User = new User();
    user.createUser(req, res);
})


export default userRoutes;