"use strict"
const personas  = [
    new Persona(`iwinser`, `sanchez`),
    new Persona(`carlos`, `Lara`),
    new Persona(`dylan`, `sanchez`)
];

function mostrarPersonas(){
    console.log("hoolla");
    let texto = ``;
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById(`personas`).innerHTML = texto;    
}
function agregarPersona (){
    const forma = document.forms[`forma`];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
}