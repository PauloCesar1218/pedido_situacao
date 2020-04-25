import { Request, Response } from 'express';
import ContaDAO from '../database/ContaDAO';
import { MysqlError } from 'mysql';
import Conta from './../models/ContaClass';
import IConta from '../interfaces/contaInterface';
class ContaController {
    public conta: IConta = Conta
    insertContaController(req: Request, res: Response): void {
        const { nomeTitular, numeroConta, saldo } = req.body;
        ContaDAO.insertConta({ nomeTitular, numeroConta, saldo: parseFloat(saldo) }, (err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    selectContaController(req: Request, res: Response): void {
        ContaDAO.selectConta((err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    depositar(req: Request, res: Response): void {
        const { saldo, numeroConta } = req.body

        console.log(numeroConta);
        
        ContaDAO.selectContaById({numeroConta},(err: MysqlError | null, results: any) => {
            console.log(results);
            if (saldo > 0) {
                results[0].saldo = parseFloat(saldo) + parseFloat(results[0].saldo);
                ContaDAO.updateSaldo({ numeroConta, saldo: parseFloat(results[0].saldo) },(err: MysqlError | null, results: any) => {
                    if (err) {
                        res.status(500).json(err)
                        return;
                    }
                    res.status(200).json(results);
                })
            }
            res.status(500).json({err: 'saldo insuficiente'});
        });
    }

    sacar(req: Request, res: Response): void {
        const { saldo, numeroConta } = req.body

        console.log(numeroConta);
        
        ContaDAO.selectContaById({numeroConta},(err: MysqlError | null, results: any) => {
            console.log(results);
            if (saldo > 0 && parseFloat(results[0].saldo) - parseFloat(saldo) > 0) {
                results[0].saldo = parseFloat(results[0].saldo) - parseFloat(saldo);
                ContaDAO.updateSaldo({ numeroConta, saldo: parseFloat(results[0].saldo) },(err: MysqlError | null, results: any) => {
                    if (err) {
                        res.status(500).json(err)
                        return;
                    }
                    res.status(200).json(results);
                })
            }
            res.status(500).json({err: 'saldo insuficiente'});
        });
    }
}

export default new ContaController()