/* 
miFuncion(9, 7);
// es un codigo reutilible

function miFuncion(a, b){
    console.log("suma: " + (a + b));
}
// se debe llamar la funcion antes de definirla o despues de definirla
miFuncion (1,7); */



// return


function miFuncion(a, b) {
    return a + b;
}
// se debe llamar la funcion antes de definirla o despues de definirla
let resultado = miFuncion(13, 2);
console.log(resultado)

// declaracion de funcion tipo expresion

let sumar = function (a, b){return a + b };

resultado = sumar (2,3);
console.log(resultado);


// funcion anonima 

(function(a,b){
    console.log("ejecutando la funcion anonima: " +  (a + b ));
})(3,4);


const funcion_Flecha = (a,b)=> a + b;
rta = funcion_Flecha(8,9);
console.log(rta);

