//Importaciones del proyecto//
const express = require('express');;
const empleados = require('./routes/employee.routes.js');
const clientes = require ('./routes/customers.routes.js');
const pedidos = require ('./routes/orders.routes.js');
const auth = require('./auth/auth.controller.js');

const app = express(); // < -- usermos el servicio de app

//Middlewares
app.use(express.json()); //Indicamos que nuestros metodos son Json
app.use(express.urlencoded({extended:false})); //Esto es para los input de nuestros formularios

//Settings
app.set('port',process.env.PORT || 3000); //El puerto que estaremos usando en todo momento 
app.set('json spaces',2) //Espacios para nuestro json *Es irrelente pero lo hace estetico*

//Rutas para nuestro servicio
app.use('/api',empleados.routerEmployee);
app.use('/api',clientes.routerCustomers);
app.use('/api',pedidos.routerOrders);
app.use('/api',auth.authRouter);

//Arranque de nuestro Server
app.listen(app.get('port'), () =>{
    console.log(`Server inicializado en el Puerto: ${app.get('port')}`);
});
