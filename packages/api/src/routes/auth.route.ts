import { Router } from 'express';

import AuthController from '../controllers/auth.controller';

const routes = Router();

routes.post('/register', AuthController.register);
routes.post('/', AuthController.authenticate);

export default routes;
