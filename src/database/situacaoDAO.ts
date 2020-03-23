import { Connection, queryCallback } from 'mysql';
import app from './../index'
import ISituacao from '../interfaces/SituacaoInterface';
class SituacaoDao {
    // private connection: Connection
    constructor() {
        // this.connection = app.connection;
    }

    insertSituacao(params: ISituacao, callback: queryCallback): void {
        app.connection.query(`INSERT INTO situacao (descricao) values (?)`, [ params.descricao ], callback)
    }

    selectSituacao(callback: queryCallback): void {
        app.connection.query(`SELECT * FROM situacao`, callback)
    }

    selectSituacaoById(params: any, callback: queryCallback): void {
        app.connection.query(`SELECT * FROM situacao WHERE id = ?`, [ params.id ], callback)
    }

    updateSituacao(params: any, callback: queryCallback): void {
        const query = app.connection.query(`update situacao set descricao = COALESCE(?, descricao) where id = ?`, [ params.descricao, params.id_situacao ], callback)
        console.log(query.sql);
        
    }

    deleteSituacao(params: any, callback: queryCallback): void {
        app.connection.query(`DELETE FROM situacao WHERE id = ?`, [ params.id_situacao ], callback)
    }

}

export default new SituacaoDao()