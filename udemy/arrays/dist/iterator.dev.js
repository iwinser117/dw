"use strict";

var varios = [117, "iwinser", {
  nombre: 1,
  apellido: "sanchez"
}, true, false, 2321, [1, 23, "tree"]];
var eArr = varios[Symbol.iterator](); //esta itearacion si funciona

for (var _i = 0, _varios = varios; _i < _varios.length; _i++) {
  var obj = _varios[_i];
  console.log(obj);
} //iteracion alternativa


var eArr2 = ["a", "b", "cv"];
var eArr1 = eArr2[Symbol.iterator]();
console.log(eArr1.next().values);
console.log(eArr1.next().values);
console.log(eArr1.next().values); //no funciona en visual code

/**
 * otro iterador es entries()
 * y nos muestra el indice y su contenido
 */

/*
const iterator1 = varios.entries();

console.log(iterator1.next().value + "soy el primer iterator");
console.log(iterator1.next().value + "soy el segundo iterator");
console.log(iterator1.next().value );

for ( let i of iterator1){
    console.log(i);
}
*/