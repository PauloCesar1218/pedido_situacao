"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./../index"));
class SituacaoDao {
    // private connection: Connection
    constructor() {
        // this.connection = app.connection;
    }
    insertSituacao(params, callback) {
        index_1.default.connection.query(`INSERT INTO situacao (descricao) values (?)`, [params.descricao], callback);
    }
    selectSituacao(callback) {
        index_1.default.connection.query(`SELECT * FROM situacao`, callback);
    }
    selectSituacaoById(params, callback) {
        index_1.default.connection.query(`SELECT * FROM situacao WHERE id = ?`, [params.id], callback);
    }
    updateSituacao(params, callback) {
        const query = index_1.default.connection.query(`update situacao set descricao = COALESCE(?, descricao) where id = ?`, [params.descricao, params.id_situacao], callback);
        console.log(query.sql);
    }
    deleteSituacao(params, callback) {
        index_1.default.connection.query(`DELETE FROM situacao WHERE id = ?`, [params.id_situacao], callback);
    }
}
exports.default = new SituacaoDao();
