import { Request, Response } from 'express';
import ISituacao from '../interfaces/situacaoInterface';
import pedidoDAO from '../database/pedidoDAO';
import { MysqlError } from 'mysql';
class PedidoController {
    public situacao: ISituacao | undefined;

    insertPedidoController(req: Request, res: Response): void {
        const { descricao, quantidade, id_situacao, desc_situacao } = req.body;
        const situacao = { id: id_situacao, descricao: desc_situacao }
        pedidoDAO.insertPedido({ descricao, quantidade, situacao }, (err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    selectPedidoController(req: Request, res: Response): void {
        pedidoDAO.selectPedido((err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    selectPedidoByIdController(req: Request, res: Response): void {
        const { id } = req.params
        pedidoDAO.selectPedidoById({ id },(err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    updatePedidoController(req: Request, res: Response): void {
        const { id_pedido, descricao, quantidade, id_situacao, desc_situacao } = req.body;
        pedidoDAO.updatePedido({ id_pedido, descricao, quantidade, id_situacao, desc_situacao },(err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    deletePedidoController(req: Request, res: Response): void {
        const { id } = req.params
        pedidoDAO.deletePedido({ id },(err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }
}

export default new PedidoController()