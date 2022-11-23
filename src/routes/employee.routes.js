//Importaciones
const Router  = require ("express");
const { getEmpleados,getEmpleadoById, createEmpleado, UpdateEmpleado, getEmpleadoByname} = require ("../controllers/employee.controller.js");

const routerEmployee = Router();

//Nuestras Rutas para los empleados 
routerEmployee.get('/empleados',getEmpleados);
routerEmployee.get('/empleados/:id',getEmpleadoById);
routerEmployee.get('/empleados/empleado/:name',getEmpleadoByname);
routerEmployee.post('/empleados/',createEmpleado);
routerEmployee.put('/empleados/:id',UpdateEmpleado);

module.exports={
    routerEmployee
}
