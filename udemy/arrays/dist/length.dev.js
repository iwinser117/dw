"use strict";

var varios = [117, "iwinser", {
  nombre: 1,
  apellido: "sanchez"
}, true, false, 2321, [1, 23, "tree"]]; //poniendo varios.length accedemos a la cantidad de elementos que tiene nuesstro array
//console.log(varios[2]);
//pero este varios.length se puede redefinir ... por ejemplo mire a acontinuacion

varios.length = 11; //y al imprimir el array se deja espacio para 4 item

console.log(varios[6].length);