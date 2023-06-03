import express, { Router } from 'express';
import userRoutes from './user';
import articleRoutes from './article';
import contactRoutes from './contact';
const Routes: Router = express.Router();

Routes.use("/", userRoutes);
Routes.use("/", contactRoutes);
Routes.use("/", articleRoutes);


export default Routes;