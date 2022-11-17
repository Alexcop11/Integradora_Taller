import {Router} from "express";
import {getPedidos,getPedidosByname,getPedidosById, UpdatePedido, createPedidos, DeletePedido} from '../controllers/orders.controller.js';

const router = Router();

router.get('/ordenes/',getPedidos);
router.get('/ordenes/:id',getPedidosById);
router.get('/ordenes/orden/:name',getPedidosByname);
router.post('/ordenes/',createPedidos);
router.put('/ordenes/:id',UpdatePedido);
router.delete('/ordenes/:id',DeletePedido);

export default router;