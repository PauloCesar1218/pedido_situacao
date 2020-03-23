import SituacaoClass from './../models/SituacaoClass'
import ISituacao from '../interfaces/SituacaoInterface';
import { Request, Response } from 'express';
import SituacaoDAO from '../database/SituacaoDAO';
import { MysqlError } from 'mysql';
class SituacaoController {
    public situacao: ISituacao | undefined;

    insertSituacaoController(req: Request, res: Response): void {
        const { descricao } = req.body;
        SituacaoDAO.insertSituacao({ descricao }, (err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    selectSituacaoController(req: Request, res: Response): void {
        SituacaoDAO.selectSituacao((err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    selectSituacaoByIdController(req: Request, res: Response): void {
        const { id } = req.params
        SituacaoDAO.selectSituacaoById({ id },(err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    updateSituacaoController(req: Request, res: Response): void {
        const { id_situacao, descricao } = req.body
        SituacaoDAO.updateSituacao({ id_situacao, descricao },(err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }

    deleteSituacaoController(req: Request, res: Response): void {
        const { id_situacao } = req.params
        SituacaoDAO.deleteSituacao({ id_situacao },(err: MysqlError | null, results: any) => {
            if (err) {
                res.status(500).json(err)
                return;
            }
            res.status(200).json(results);
        })
    }
}

export default new SituacaoController()