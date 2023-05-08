import express, {Application} from 'express';
import Routes from './routes/routes';
import cors from 'cors';
const app:Application = express();


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", Routes);



export default app;
