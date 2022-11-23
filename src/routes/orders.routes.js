const{Router} = require ("express");
const {getPedidos,getPedidosByname,getPedidosById, UpdatePedido, createPedidos, DeletePedido} = require ('../controllers/orders.controller.js');

const routerOrders = Router();

routerOrders.get('/ordenes/',getPedidos);
routerOrders.get('/ordenes/:id',getPedidosById);
routerOrders.get('/ordenes/orden/:name',getPedidosByname);
routerOrders.post('/ordenes/',createPedidos);
routerOrders.put('/ordenes/:id',UpdatePedido);


module.exports={
    routerOrders
}