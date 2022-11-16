import { json } from 'express'
import {database} from '../database.js'

export const getPedidos = async(req,res) => {
    const result = await database.query('SELECT * FROM orders')
    res.send(result)
}
export const getPedidosById = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM orders WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre su pedido por favor de consultar con un gerente'})
    }
   res.json(rows[0]) 
}

export const getPedidosByname = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM orders WHERE name = ?;', [req.params.name])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre su pedido por favor de consultar con un gerente'})
    }
    res.json(rows[0])
}


export const createPedidos = async(req,res) => {
    const {name,description,pieces,prize,total,r_date,status,balance} = req.body
    const [rows] = await database.query('INSERT INTO orders (name,description,pieces,prize,total,r_date,status,balance) VALUES (?,?,?,?,?,?,?,?)',[name,description,pieces,prize,total,r_date,status,balance])
    res.send("Su pedido a sido creado Exitosamente Tenga un buen dia");
}

export const UpdatePedido = async(req,res) => {
    const {id} = req.params
    const {name,description,pieces,prize,total,r_date,status,balance} = req.body
    const [result] = await database.query('UPDATE orders SET name=?,description=?,pieces=?,prize=?,total=?,r_date=?,status=?,balance=? WHERE id = ?;',
    [name,description,pieces,prize,total,r_date,status,balance,id])
    if(result.affectedRows === 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    const [personal] = ('SELECT * FROM orders WHERE id=?;',[id])
    res.send("Actualizacion del Pedido Correcta")
    res.json(personal)
};
