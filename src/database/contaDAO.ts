import { Connection, queryCallback } from 'mysql';
import app from '../index'
import IConta from '../interfaces/contaInterface';
class ContaDao {
    // private connection: Connection
    constructor() {
        // this.connection = app.connection;
    }

    insertConta(params: any, callback: queryCallback): void {
        app.connection.query(`INSERT INTO conta (nomeTitular, numeroConta, saldo) values (?, ?, ?)`, [ params.nomeTitular, params.numeroConta, params.saldo ], callback)
    }

    selectConta(callback: queryCallback): void {
        app.connection.query(`SELECT * FROM conta`, callback)
    }

    selectContaById(params: any, callback: queryCallback): void {
        const query = app.connection.query(`SELECT * FROM conta WHERE numeroConta = ?;`, [params.numeroConta], callback)
        console.log(query.sql);
        
    }

    updateSaldo(params: any, callback: queryCallback): void {
        const query = app.connection.query(`UPDATE conta SET saldo = COALESCE(?, saldo) WHERE numeroConta = ?`, [ params.saldo, params.numeroConta ], callback)
        console.log(query.sql);
    }


}

export default new ContaDao()