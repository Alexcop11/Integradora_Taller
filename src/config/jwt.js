const jwt = require('jsonwebtoken');

const generateToken=(payload)=>{
    return jwt.sign(payload,process.env.SECRET); //<--Genera un Token   
}

const auth = async(req,res,next) => {
    try {
        const token = req.headers.authorization?.replace('Bearer',''); //<-- crera una constante token si es que en la cabezera tiene un token
        if(!token) throw Error(''); // <-- Valida el token
        const decodeToken = jwt.verify(token,process.env.SECRET); // <-- decodifica el token que recibe
        req.token = decodeToken; //<-- y manda el token de nuevo decodificado
        next(); // <-- Pasara a la siguiente funcion en cuanto el proceso se cumpla
    }catch {
        res.status(401).json({message:'Unathorized'}); // <-- El mensaje de despliega en cuanto no tenga un token
    }
}

const checkRoles = (roles) =>{
    return async (req,res,next) =>{
        try{
            const token = req.token; // <-- Recibe el token
            if(!token) throw Error(''); // <-- Valida el token ("si el campo va vacio")
            if(!roles.some(role => role === token.role))throw Error(''); // <-- Checa el role que nuestro usuario tendra
            next(); // <-- pasara a la siguiente funcion
        }catch(error){
            res.status(401).json({message:'Unathorized'}); // <-- saltara el error si es que el token no es valido acorde a la actividad
        }
    }
}

module.exports={
    checkRoles,
    auth,
    generateToken
}