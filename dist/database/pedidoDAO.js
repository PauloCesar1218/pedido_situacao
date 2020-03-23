"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./../index"));
class PedidoDao {
    // private connection: Connection
    constructor() {
        // this.connection = app.connection;
    }
    insertPedido(params, callback) {
        index_1.default.connection.query(`INSERT INTO pedido (descricao, quantidade, id_situacao) values (?, ?, ?)`, [params.descricao, params.quantidade, params.situacao.id], callback);
    }
    selectPedido(callback) {
        index_1.default.connection.query(`SELECT * FROM pedido`, callback);
    }
    selectPedidoById(params, callback) {
        index_1.default.connection.query(`SELECT * FROM pedido WHERE id = ?`, [params.id], callback);
    }
    updatePedido(params, callback) {
        const query = index_1.default.connection.query(`UPDATE pedido SET descricao = COALESCE(?, descricao), quantidade = COALESCE(?, quantidade), id_situacao = COALESCE(?, id_situacao) WHERE id = ?`, [params.descricao, params.quantidade, params.id_situacao, params.id_pedido], callback);
        console.log(query.sql);
    }
    deletePedido(params, callback) {
        index_1.default.connection.query(`DELETE FROM pedido WHERE id = ?`, [params.id], callback);
    }
}
exports.default = new PedidoDao();
