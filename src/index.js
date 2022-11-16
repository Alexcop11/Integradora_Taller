//Importaciones del proyecto//
import express from 'express';
import empleados from './routes/employee.routes.js'
import clientes from './routes/customers.routes.js'
import pedidos from './routes/orders.routes.js';

const app = express(); // < -- usermos el servicio de app

//Middlewares
app.use(express.json()); //Indicamos que nuestros metodos son Json
app.use(express.urlencoded({extended:false})); //Esto es para los input de nuestros formularios

//Settings
app.set('port',process.env.PORT || 3000); //El puerto que estaremos usando en todo momento 
app.set('json spaces',2) //Espacios para nuestro json *Es irrelente pero lo hace estetico*

//Rutas para nuestro servicio
app.use('/api',empleados);
app.use('/api',clientes);
app.use('/api',pedidos);

//Arranque de nuestro Server
app.listen(app.get('port'), () =>{
    console.log(`Server inicializado en el Puerto: ${app.get('port')}`);
});
