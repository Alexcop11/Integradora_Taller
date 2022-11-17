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
    const {name,description,pieces,prize,total,r_date,status,balance,comments,id_customer,idr_employee} = req.body
    const calculo = (total-balance);
    const [rows] = await database.query('INSERT INTO orders (name,description,pieces,prize,total,r_date,status,balance,comments,id_customer,idr_employee) VALUES (?,?,?,?,?,?,?,?,?,?,?)',[name,description,pieces,prize,calculo,r_date,status,balance,comments,id_customer,idr_employee])
    res.send("Su pedido a sido creado Exitosamente Tenga un buen dia");
}

export const UpdatePedido = async(req,res) => {
    const {id} = req.params
    const {name,description,pieces,prize,total,r_date,status,balance,comments,id_customer,idr_employee} = req.body
    const calculo = (total-balance);
    const [result] = await database.query('UPDATE orders SET name=?,description=?,pieces=?,prize=?,total=?,r_date=?,status=?,balance=?,comments=?,id_customer=?,idr_employee=? WHERE id = ?;',
    [name,description,pieces,prize,calculo,r_date,status,balance,comments,id_customer,idr_employee,id])
    if(result.affectedRows === 0){
        res.status(404),json({message:'No encontre su pedido por favor llamar a un Gerente'})
    }
    const [personal] = ('SELECT * FROM orders WHERE id=?;',[id])
    res.send("Actualizacion del Pedido Correcta")
    res.json(personal)
};

export const DeletePedido = async(req,res) => {
    const [rows] = await database.query('DELETE FROM orders WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    res.send("Eliminacion de Pedido Correcta")
   res.json(rows[0])
};
