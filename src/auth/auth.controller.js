const { Router } = require('express');
const { validateError } = require('../utils/functions.js');
const { login } = require('../auth/auth.gateway.js');

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
const authRouter = Router();

authRouter.post(`/login`, singin);

module.exports={
    authRouter
}