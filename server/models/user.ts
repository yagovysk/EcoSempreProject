import { Request, Response } from "express";
import { Session } from "express-session";
import bcrypt from 'bcrypt';

import Connection from "../database/connection";


interface sessionUser extends Session {
    user?: object
}
type Login = {
    email: string,
    password: string
}
interface IUser {
    id?: number;
    nickname: string;
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}
class User {
    constructor() {

    }
    private hashPassword(password: string) {
        // check if the pass is most longer then 8 

        const length: number = password.length;

        if (length < 8) {
            throw new Error("the password is short, min length is 8");
        }

        // hashing the pass
        const SALT_ROUNDS = 10
        const SALT: string = bcrypt.genSaltSync(SALT_ROUNDS);

        const hashedPassword: string = bcrypt.hashSync(password, SALT);

        return hashedPassword;

    }
    private async verifyUserByEmail(email: string) {
        const query: string[] = await Connection("users").select("*").where({ email });

        if (query[0] === undefined) {
            return false;
        }
        return true;
    }
    private getRole = async (email: string) => {
        const role = await Connection("roles")
            .join("users", "roles.user_id", "=", "users.id")
            .select("roles.*")
            .where("users.email", email)
            .first();

        return role.role;
    };


    private confirmPassword = async (credentails: Login) => {

        const user: IUser = await Connection("users").select("*").where({ email: credentails.email }).first();

        // check if the pass is most longer then 8 

        const length: number = credentails.password.length;

        if (length < 8) {
            return false
        }

        const correct: boolean = bcrypt.compareSync(credentails.password, user.password);

        if (correct) {
            return true;
        }
        return false;
    }

    public createUser = async (req: Request, res: Response) => {

        try {
            const user: IUser = req.body;

            const exist: boolean = await this.verifyUserByEmail(user.email);

            if (exist) {
                throw new Error("The user already exist");
            }

            const hashedPassword = this.hashPassword(user.password);

            user.password = hashedPassword;
            const result: string[] = await Connection("users").insert(user);


            res.status(201).send(`Created! ${result[0]}`)
        }
        catch (error: any) {
            res.status(400).send(error.message);
        }

    };
    public login = async (req: Request, res: Response) => {
        try {
            const credentials: Login = req.body;
            const session: sessionUser = req.session;

            const exist: boolean = await this.verifyUserByEmail(credentials.email);

            if (exist) {
                const confirmed: boolean = await this.confirmPassword(credentials);

                if (confirmed) {
                    const userRole = await this.getRole(credentials.email);
                    session.user = {
                        role: userRole
                    }
                    return res.status(200).send("ok");
                }
                else {
                    res.status(400).send("Incorrect Password");
                }
            }
            else {
                res.status(404).send("The user doesn't exist");

            }

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };

}


export default User;
