"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const connectionFactory_1 = __importDefault(require("./database/connectionFactory"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.port = process.env.PORT || 2000;
        this.express = express_1.default();
        this.express.listen(this.port, () => console.log('Server listening on port', this.port));
        this.middlewares();
        this.connection = connectionFactory_1.default.connectDatabase();
        this.routes();
    }
    middlewares() {
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
        this.express.use(body_parser_1.default.json());
        this.express.use(cors_1.default());
    }
    routes() {
        this.express.use(routes_1.default);
    }
}
exports.default = new App();
