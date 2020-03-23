"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pedidoDAO_1 = __importDefault(require("../database/pedidoDAO"));
class PedidoController {
    insertPedidoController(req, res) {
        const { descricao, quantidade, id_situacao, desc_situacao } = req.body;
        const situacao = { id: id_situacao, descricao: desc_situacao };
        pedidoDAO_1.default.insertPedido({ descricao, quantidade, situacao }, (err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    selectPedidoController(req, res) {
        pedidoDAO_1.default.selectPedido((err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    selectPedidoByIdController(req, res) {
        const { id } = req.params;
        pedidoDAO_1.default.selectPedidoById({ id }, (err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    updatePedidoController(req, res) {
        const { id_pedido, descricao, quantidade, id_situacao, desc_situacao } = req.body;
        pedidoDAO_1.default.updatePedido({ id_pedido, descricao, quantidade, id_situacao, desc_situacao }, (err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
    deletePedidoController(req, res) {
        const { id } = req.params;
        pedidoDAO_1.default.deletePedido({ id }, (err, results) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(results);
        });
    }
}
exports.default = new PedidoController();
