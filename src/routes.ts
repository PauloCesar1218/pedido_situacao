import { Router, Request, Response } from 'express'
import PedidoController from './controllers/pedidoController'
import SituacaoController from './controllers/situacaoController';

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json({'mensagem':'Hello world'})
});

// PEDIDO BEGIN
router.post('/pedido', PedidoController.insertPedidoController)
router.get('/pedido', PedidoController.selectPedidoController)
router.get('/pedido/:id', PedidoController.selectPedidoByIdController)
router.post('/pedido/update/', PedidoController.updatePedidoController)
router.get('/pedido/delete/:id', PedidoController.deletePedidoController)
// PEDIDO END

// SITUACAO BEGIN
router.post('/situacao', SituacaoController.insertSituacaoController)
router.get('/situacao', SituacaoController.selectSituacaoController)
router.get('/situacao/:id', SituacaoController.selectSituacaoByIdController)
router.post('/situacao/update/', SituacaoController.updateSituacaoController)
router.get('/situacao/delete/:id_situacao', SituacaoController.deleteSituacaoController)
// SITUACAO END

export default router;