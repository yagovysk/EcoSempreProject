import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SESSION;
const maxAge = 200000000;

if (!secret) {
  throw new Error('Variável de ambiente SESSION não está definida');
}

const Session = session({
  secret: secret as string,
  cookie: {
    maxAge
  }
});

export default Session;
