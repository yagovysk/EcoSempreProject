"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlogMiddleware {
    constructor() {
        this.handle = (req, res, next) => {
            try {
                const client = req.headers["origin"];
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
            catch (error) {
                res.sendStatus(400);
            }
        };
    }
}
exports.default = BlogMiddleware;
