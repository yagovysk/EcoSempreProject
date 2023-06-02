import { Request, Response, NextFunction } from "express";
import { Session } from "express-session";
import dotenv from "dotenv";
dotenv.config();

interface SessionUser extends Session {
  user?: {
    role?: string;
  };
}

export class Middleware {
  public handle(req: Request, res: Response, next: NextFunction) {
    const session: SessionUser = req.session;

    if (process.env.NODE_ENV === "test") {
      next();
      return;
    }

    if (session.user === undefined) {
      res.status(401).send("unauthorized");
    } else {
      const role: string | undefined = session.user.role;

      if (!role) {
        res.status(401).send("unauthorized");
      } else {
        next();
      }
    }
  }
}

export default Middleware;