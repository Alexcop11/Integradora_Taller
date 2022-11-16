//Importaciones
import {Router} from "express";
import { getEmpleados,getEmpleadoById, createEmpleado, UpdateEmpleado, getEmpleadoByname} from "../controllers/employee.controller.js";

const router = Router();

//Nuestras Rutas para los empleados 
router.get('/empleados',getEmpleados);
router.get('/empleados/:id',getEmpleadoById);
router.get('/empleados/empleado/:name',getEmpleadoByname);
router.post('/empleados/',createEmpleado);
router.put('/empleados/:id',UpdateEmpleado);


export default router