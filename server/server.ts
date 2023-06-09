import express, {Application} from 'express';
import cors from 'cors';

import userRoutes from './routes/user';
import tagRoutes from './routes/tag';
import articleRoutes from './routes/article';
import contactRoutes from './routes/contact';
import newsletterRoutes from './routes/newsletter';
import createAdminUser from './createAdminUserScript';


// setup admin
createAdminUser();
const app:Application = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", userRoutes);
app.use("/", articleRoutes);
app.use("/", contactRoutes);
app.use("/", tagRoutes);
app.use("/", newsletterRoutes);

export default app;
