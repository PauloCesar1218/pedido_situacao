import { Connection, queryCallback } from 'mysql';
import app from './../index'
import IPedido from '../interfaces/pedidoInterface';
class PedidoDao {
    // private connection: Connection
    constructor() {
        // this.connection = app.connection;
    }

    insertPedido(params: IPedido, callback: queryCallback): void {
        app.connection.query(`INSERT INTO pedido (descricao, quantidade, id_situacao) values (?, ?, ?)`, [ params.descricao, params.quantidade, params.situacao.id ], callback)
    }

    selectPedido(callback: queryCallback): void {
        app.connection.query(`SELECT * FROM pedido`, callback)
    }

    selectPedidoById(params: any, callback: queryCallback): void {
        app.connection.query(`SELECT * FROM pedido WHERE id = ?`, [ params.id ], callback)
    }

    updatePedido(params: any, callback: queryCallback): void {
        const query = app.connection.query(`UPDATE pedido SET descricao = COALESCE(?, descricao), quantidade = COALESCE(?, quantidade), id_situacao = COALESCE(?, id_situacao) WHERE id = ?`, [ params.descricao, params.quantidade, params.id_situacao, params.id_pedido ], callback)
        console.log(query.sql);
        
    }

    deletePedido(params: any, callback: queryCallback): void {
        app.connection.query(`DELETE FROM pedido WHERE id = ?`, [ params.id ], callback)
    }

}

export default new PedidoDao()