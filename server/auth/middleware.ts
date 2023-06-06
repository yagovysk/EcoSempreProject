import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export class Middleware {
  public handle(req: Request, res: Response, next: NextFunction) {

    const authorization: string = req.headers['authorization'] || '';
    const token: string = authorization.split(" ")[1];
    if (process.env.NODE_ENV === "test") {
      next();
      return;
    }

    try {

      const decoded: JwtPayload | string = jwt.verify(token, process.env.JWT_SECRET!);

      if (typeof decoded === 'object') {
        const exp: number = decoded.exp!;
        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime > exp) {

          res.sendStatus(498)
        } else {
          next();
        }
      }
    }
    catch (error: any) {
      res.sendStatus(400)
    }
  }
}

export default Middleware;