import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

/** * USER * **/
routes.get('/user/list', UserController.list);

export default routes;