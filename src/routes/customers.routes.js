//Importaciones de nuestro proyecto
const {Router} = require ("express");
const {getClientes,getClienteById,createCliente,UpdateCliente, getClienteByname} = require ('../controllers/customers.controller.js')
const { auth, checkRoles } = require("../config/jwt.js");


const routerCustomers = Router();

routerCustomers.get('/clientes',getClientes);
routerCustomers.get('/clientes/:id',getClienteById);
routerCustomers.get('/clientes/cliente/:name',getClienteByname);
routerCustomers.post('/clientes/',[auth,checkRoles(['empleado'])],createCliente); // <-- usamos nuestros metodos de autenticacion y de check de Rol
routerCustomers.put('/clientes/:id',[auth,checkRoles(['empleado'])],UpdateCliente);


module.exports={
    routerCustomers,
}
