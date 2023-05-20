import express, {Application} from 'express';
import Routes from './routes/routes';
import cors from 'cors';
import Session from './auth/session';
import createAdminUser from './createAdminUserScript';

// setup admin
createAdminUser();
const app:Application = express();


app.use(Session)
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", Routes);



export default app;
