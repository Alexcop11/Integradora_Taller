//Importaciones de nuestro proyecto
import {Router} from "express";
import {getClientes,getClienteById,createCliente,UpdateCliente, getClienteByname} from '../controllers/customers.controller.js'


const router = Router();

router.get('/clientes',getClientes);
router.get('/clientes/:id',getClienteById);
router.get('/clientes/cliente/:name',getClienteByname);
router.post('/clientes/',createCliente);
router.put('/clientes/:id',UpdateCliente);




export default router