const bcrypt=require('bcryptjs');

 const  validateError=(error)=>{
    switch (error.message){
        case"Wrong type":
            return "Reciew request fields";
        case "Missing fields":
            return "Validate fields";
        case"Inexistent role":
            return "Role not registerd";
        case"Nothing found":
            return "no data found";
        case "Password mismatch":
            return "Credentials missmatch";
        case "User disabled" :
            return "User disabled";
        default:
            return "Reciew request";
    }
};

const hashPassword=async(password)=>{
    const salt= await bcrypt.genSalt(15);
    return await bcrypt.hash(password,salt);
};


const validatePassword=async(password,hashedPassword)=>{
    return await bcrypt.compare(password,hashedPassword);
} ;

module.exports={
    hashPassword,
    validatePassword,
    validateError,
};