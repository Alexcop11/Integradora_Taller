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


export const createEmpleado = async(req,res) => {
    const {name,description,pieces,prize,total,r_date,status,balance} = req.body
    const [rows] = await database.query('INSERT INTO employee (username,password,name,age,phone_number,gender) VALUES (?,?,?,?,?,?)',[username,password,name,age,phone_number,gender])
    res.send("El usuario a sido creado Exitosamente Tenga un buen dia");
}

export const UpdateEmpleado = async(req,res) => {
    const {id} = req.params
    const {username,password,name,age,phone_number,gender,state} = req.body
    const [result] = await database.query('UPDATE employee SET username=?,password=?,name=?,age=?,phone_number=?,gender=?,state=? WHERE id = ?;',
    [username,password,name,age,phone_number,gender,state,id])
    if(result.affectedRows === 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    const [personal] = ('SELECT * FROM employee WHERE id=?;',[id])
    res.send("Actualizacion del Emplead@ Correcta")
    res.json(personal)
};
