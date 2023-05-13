import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SESSION;
const maxAge = 200000000;

if (!secret) {
  throw new Error("Enviroment variable doesn't exist");
}

const Session = session({
  secret: secret as string,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge
  }
});

export default Session;
