import {Router} from "express";
import {getPedidos,getPedidosByname,getPedidosById, UpdatePedido, createPedidos} from '../controllers/orders.controller.js';

const router = Router();

router.get('/ordenes/',getPedidos);
router.get('/ordenes/:id',getPedidosById);
router.get('/ordenes/orden/:name',getPedidosByname);
router.post('/ordenes/',createPedidos);
router.put('/ordenes/:id',UpdatePedido);


export default router;