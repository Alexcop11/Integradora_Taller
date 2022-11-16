import { json } from 'express'
import {database} from '../database.js'

export const getClientes = async(req,res) => {
    const result = await database.query('SELECT * FROM customer')
    res.send(result)
}
export const getClienteById = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM customer WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encuentro registro de un Cliente Por favor de consultar con un Gerente'})
    }
   res.json(rows[0]) 
}

export const getClienteByname = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM customer WHERE name = ?;',[req.params.name])
    if(rows.length <= 0){
        res.status(404),json({message:'No encuentro registro de un Cliente Por favor de consultar con un Gerente'})
    }
   res.json(rows[0]) 
}

export const createCliente = async(req,res) => {
    const {name,type,phone_number,address,balance} = req.body
    const [rows] = await database.query('INSERT INTO customer (name,type,phone_number,address,balance) VALUES (?,?,?,?,?)',[name,type,phone_number,address,balance])
    res.send("!!Cliente Registrado de manera Exitosa!!");
}

export const UpdateCliente = async(req,res) => {
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