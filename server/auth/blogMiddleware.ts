import { Request, Response, NextFunction } from "express"

type clientOrigin = string | string[]
class BlogMiddleware {
    constructor() { }

    handle = (req: Request, res: Response, next: NextFunction) => {
        try {
            const client: clientOrigin = req.headers["origin"]!;


            if (typeof client === 'string') {
                if (client === "ecosempre") {
                    next();
                }
                else {
                    res.sendStatus(403);
                }
            }
            if (client === undefined || !client) {
                throw new Error("unnavailable origin");
            }
        }
        catch (error: any) {
            res.sendStatus(400)
        }
    }
}

export default BlogMiddleware;