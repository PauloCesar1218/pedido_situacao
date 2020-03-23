"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidoController_1 = __importDefault(require("./controllers/pedidoController"));
const situacaoController_1 = __importDefault(require("./controllers/situacaoController"));
const router = express_1.Router();
router.get('/', (req, res) => {
    res.json({ 'mensagem': 'Hello world' });
});
// PEDIDO BEGIN
router.post('/pedido', pedidoController_1.default.insertPedidoController);
router.get('/pedido', pedidoController_1.default.selectPedidoController);
router.get('/pedido/:id', pedidoController_1.default.selectPedidoByIdController);
router.post('/pedido/update/', pedidoController_1.default.updatePedidoController);
router.get('/pedido/delete/:id', pedidoController_1.default.deletePedidoController);
// PEDIDO END
// SITUACAO BEGIN
router.post('/situacao', situacaoController_1.default.insertSituacaoController);
router.get('/situacao', situacaoController_1.default.selectSituacaoController);
router.get('/situacao/:id', situacaoController_1.default.selectSituacaoByIdController);
router.post('/situacao/update/', situacaoController_1.default.updateSituacaoController);
router.get('/situacao/delete/:id_situacao', situacaoController_1.default.deleteSituacaoController);
// SITUACAO END
exports.default = router;
