import {Router} from "express";
import {getPedidos,getPedidosByname,getPedidosById} from '../controllers/orders.controller.js';

const router = Router();

router.get('/ordenes/',getPedidos);
router.get('/ordenes/:id',getPedidosById);
router.get('/ordenes/orden/:name',getPedidosByname);


export default router;