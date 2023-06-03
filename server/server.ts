import express, {Application} from 'express';
import cors from 'cors';

import userRoutes from './routes/user';
import articleRoutes from './routes/article';
import contactRoutes from './routes/contact';
import notFoundRoute from './routes/notFound';
import Session from './auth/session';
import createAdminUser from './createAdminUserScript';

// setup admin
createAdminUser();
const app:Application = express();


app.use(Session)
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", userRoutes);
app.use("/", articleRoutes);
app.use("/", contactRoutes);
app.use("/", notFoundRoute);


export default app;
