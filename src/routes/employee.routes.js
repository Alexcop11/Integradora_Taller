//Importaciones
const Router  = require ("express");
const { getEmpleados,getEmpleadoById, createEmpleado, UpdateEmpleado, getEmpleadoByname} = require ("../controllers/employee.controller.js");
const { auth, checkRoles } = require("../config/jwt.js");
const routerEmployee = Router();

//Nuestras Rutas para los empleados 
routerEmployee.get('/empleados',[auth,checkRoles(['admin'])],getEmpleados);
routerEmployee.get('/empleados/:id',getEmpleadoById);
routerEmployee.get('/empleados/empleado/:name',getEmpleadoByname);
routerEmployee.post('/empleados/',[auth,checkRoles(['admin'])],createEmpleado);
routerEmployee.put('/empleados/:id',[auth,checkRoles(['admin'])],UpdateEmpleado);

module.exports={
    routerEmployee
}
