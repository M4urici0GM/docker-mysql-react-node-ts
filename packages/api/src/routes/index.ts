import { Router } from 'express';

import AppRoutes from './app.route';
import AuthMiddleware from '../middlewares/auth.middleware';

import AuthRoutes from './auth.route';

const routes = Router();

routes.use('/api/v1', AuthMiddleware, AppRoutes);
routes.use('/auth', AuthRoutes);

export default routes;
