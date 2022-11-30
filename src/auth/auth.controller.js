const { Router } = require('express');
const { validateError } = require('../utils/functions.js');
const { login, login_Admin } = require('../auth/auth.gateway.js');

//Empleados

const singin = async (req, res = Response) => { 
    try {
        const { username, password } = req.body; // <-- Parametros
        const token = await login({ username, password }); // <-- usa nuestra funcion token para generar un token valido    
        res.status(200).json({ token }); // <-- No regresa el token valido

    } catch (error) { // <-- Caso contrario nos mandara el error con sus especificaciones
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
};


//Admin
const singAdmin = async (req, res = Response) => {
    try{
        const{password} = req.body; // <-- Parametros del login del admin
        const token = await login_Admin({password});
        res.status(200).json({token});
    }catch(error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}




const authRouter = Router();

authRouter.post(`/login`, singin);
authRouter.post(`/login/Ad`,singAdmin);

module.exports={
    authRouter
}