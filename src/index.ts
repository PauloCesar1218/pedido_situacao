import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import routes from './routes';
import database from './database/connectionFactory';
import bodyParser from 'body-parser';

class App {
    public express: express.Application;
    public connection: mysql.Connection;
    private port: number | string  = process.env.PORT || 2000;

    public constructor() {
        this.express = express();
        this.express.listen(this.port, () => console.log('Server listening on port', this.port));
        this.middlewares();
        this. connection = database.connectDatabase();
        this.routes();
    }

    private middlewares() {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
        this.express.use(cors());
    }

    private routes() {
        this.express.use(routes);
    }
}

export default new App()
