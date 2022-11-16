//Importaciones
import {createPool} from 'mysql2/promise';

export const database = createPool({
    host: 'localhost', //La ubicacion de nuestra base
    user: 'root',
    password : 'root',
    port:3306,
    database : 'taller'
});