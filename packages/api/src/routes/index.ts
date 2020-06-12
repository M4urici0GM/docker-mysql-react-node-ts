import { Router } from 'express';

import AppRoutes from './app.route';
import AuthRoutes from './auth.route';

const routes = Router();

routes.use('/api/v1', AppRoutes);
routes.use('/auth', AuthRoutes);

export default routes;
