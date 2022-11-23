const { json }  = require('express')
const {database} = require ('../utils/database.js');

const getEmpleados = async(req,res) => {
    const result = await database.query('SELECT * FROM employee')
    res.send(result)
}
const getEmpleadoById = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM employee WHERE id = ?;',[req.params.id])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
   res.json(rows[0]) 
}

const getEmpleadoByname = async (req,res) => {
    const [rows] = await database.query('SELECT * FROM employee WHERE name = ?;', [req.params.name])
    if(rows.length <= 0){
        res.status(404),json({message:'No encontre a su empleado'})
    }
    res.json(rows[0])
}


const createEmpleado = async(req,res) => {
    const {username,password,name,age,phone_number,gender} = req.body
    const [rows] = await database.query('INSERT INTO employee (username,password,name,age,phone_number,gender) VALUES (?,?,?,?,?,?)',[username,password,name,age,phone_number,gender])
    res.send("El usuario a sido creado Exitosamente Tenga un buen dia");
}

const UpdateEmpleado = async(req,res) => {
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

module.exports={
    getEmpleados,
    getEmpleadoById,
    getEmpleadoByname,
    createEmpleado,
    UpdateEmpleado
}