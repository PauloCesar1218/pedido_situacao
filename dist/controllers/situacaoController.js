"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SituacaoDAO_1 = __importDefault(require("../database/SituacaoDAO"));
class SituacaoController {
    insertSituacaoController(req, res) {
        const { descricao } = req.body;
        SituacaoDAO_1.default.insertSituacao({ descricao }, (err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    selectSituacaoController(req, res) {
        SituacaoDAO_1.default.selectSituacao((err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    selectSituacaoByIdController(req, res) {
        const { id } = req.params;
        SituacaoDAO_1.default.selectSituacaoById({ id }, (err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    updateSituacaoController(req, res) {
        const { id_situacao, descricao } = req.body;
        SituacaoDAO_1.default.updateSituacao({ id_situacao, descricao }, (err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    deleteSituacaoController(req, res) {
        const { id_situacao } = req.params;
        SituacaoDAO_1.default.deleteSituacao({ id_situacao }, (err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
}
exports.default = new SituacaoController();
