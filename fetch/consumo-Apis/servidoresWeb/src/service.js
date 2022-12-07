const data = require("./datosPost.json");

module.exports = {
    getUser:(id) => {
        let identificador = Number(id);
        let user = data.filter(persona=>
            persona.id === identificador
        ) [0]
        return user;
    },
    getUsers:()=> data  ,
    createUser : (dataUser) => {
        let newUser = {
            id: data.length+1,
            ...dataUser,
        }
        data.push(newUser);
        return newUser;
    }
    
}