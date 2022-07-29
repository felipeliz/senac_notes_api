import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';
import './database';

class App {
    constructor() {
        this.server = express();
        this.server.use(cors());
        this.server.use(function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });

        this.routes();
    }
    
    routes() {
        this.server.use(bodyParser.json());
        this.server.use(routes);
    }
}

export default new App().server;