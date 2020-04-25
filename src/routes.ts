import { Router, Request, Response } from 'express'
import ContaController from './controllers/contaController'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json({'mensagem':'Hello world'})
});

// CONTA BEGIN
router.post('/conta', ContaController.insertContaController)
router.get('/conta', ContaController.selectContaController)
router.post('/conta/depositar', ContaController.depositar)
router.post('/conta/sacar', ContaController.sacar)
// CONTA END


export default router;