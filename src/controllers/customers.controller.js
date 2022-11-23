const { json } = require ('express');
const {database} = require ('../utils/database.js');

const getClientes = async(req,res) => {
    const result = await database.query('SELECT * FROM customer')
    res.send(result)
};
const getClienteById = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM customer WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encuentro registro de un Cliente Por favor de consultar con un Gerente'})
    }
   res.json(rows[0]) 
};

const getClienteByname = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM customer WHERE name = ?;',[req.params.name])
    if(rows.length <= 0){
        res.status(404),json({message:'No encuentro registro de un Cliente Por favor de consultar con un Gerente'})
    }
   res.json(rows[0]) 
};

const createCliente = async(req,res) => {
    const {name,type,phone_number,address,balance} = req.body
    const [rows] = await database.query('INSERT INTO customer (name,type,phone_number,address,balance) VALUES (?,?,?,?,?)',[name,type,phone_number,address,balance])
    res.send("!!Cliente Registrado de manera Exitosa!!");
};

const UpdateCliente = async(req,res) => {
    const {id} = req.params
    const {name,type,phone_number,address,balance} = req.body
    const [result] = await database.query('UPDATE customer SET name=?, type=? ,phone_number=?, address=?, balance=? WHERE id = ?;',
    [name,type,phone_number,address,balance,id])
    if(result.affectedRows === 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    const [personal] = ('SELECT * FROM employee WHERE id=?;',[id])
    res.send("Actualizacion del Cliente Correcta Tenga un Buen Dia <3")
};

const DeleteCliente = async(req,res) => {
};

module.exports={
    getClientes,
    getClienteById,
    getClienteByname,
    createCliente,
    UpdateCliente,
    DeleteCliente
}