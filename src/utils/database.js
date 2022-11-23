//Importaciones
const mysql = require('mysql2/promise');
const db = require('mysql2');
require('dotenv').config();

const database = mysql.createPool({
    host: 'localhost', //La ubicacion de nuestra base
    user: 'root',
    password : 'root',
    port:3306,
    database : 'taller'
});

const client = db.createPool({
    host: 'localhost', //La ubicacion de nuestra base
    user: 'root',
    password : 'root',
    port:3306,
    database : 'taller'
    /*connectionLimit:5,
    host: process.env.BD_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    debug :false*/
});

const query = (query,params) => {
    return new Promise((resolve,reject)=>{
        client.getConnection((err,conn)=>{
            if(err) reject(err);
            client.query(query,params,(err,rows)=>{
                if(err) reject (err);
                //client.relase();
                resolve(rows);
            });
        });
    });
};

module.exports={
    database,
    query
}