import { Router } from 'express';

// import AuthMiddleware from '../middlewares/auth.middleware';
import UserController from '~/controllers/user.controller';

const routes = Router();

routes.get('/user', UserController.index);
routes.get('/user/:userId', UserController.getOne);

export default routes;
