import express, {Application} from 'express';
import cors from 'cors';

import userRoutes from './routes/user';
import tagRoutes from './routes/tag';
import articleRoutes from './routes/article';
import contactRoutes from './routes/contact';
import newsletterRoutes from './routes/newsletter';
import createAdminUser from './createAdminUserScript';
import categoryCollectionPointsRoutes from './routes/categoryCollectionPoints';
import collectionPointRoutes from './routes/collectionPoint';
import scheduleRoutes from './routes/schedulePickup';
// setup admin
createAdminUser();
const app:Application = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use("/api/v1", articleRoutes);
app.use("/api/v1", contactRoutes);
app.use("/api/v1", tagRoutes);
app.use("/api/v1", newsletterRoutes);
app.use("/api/v1", categoryCollectionPointsRoutes);
app.use("/api/v1", collectionPointRoutes);
app.use("/api/v1", scheduleRoutes);

export default app;
