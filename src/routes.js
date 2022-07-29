import { Router } from 'express';
import UserController from './app/controllers/UserController';
import NoteController from './app/controllers/NoteController';

const routes = new Router();

/** * USER * **/
routes.get('/user/list', UserController.list);

/** * NOTES * **/
routes.get('/notes/list', NoteController.list);
routes.get('/notes/show/:id', NoteController.show);
routes.post('/notes/store', NoteController.store);
routes.patch('/notes/update/:id', NoteController.update);
routes.delete('/notes/delete/:id', NoteController.delete);

export default routes;