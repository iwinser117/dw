"use strict";

var varios = [117, "iwinser", {
  nombre: 1,
  apellido: "sanchez"
}, true, false, 2321, [1, 23, "tree"]];
var arr = [1, 2, 3];
var arra1 = {
  n2: 22,
  m: "text"
}; //se usa para unir 2 o mas arreglos

var n1 = varios.concat(arr);
var n2 = varios.concat(arra1);
console.log(n2);
/**
 * Sintaxis
 * 
 * var nuevoArray = viejoArray.CONCAT(valor1[,valor2[,...valorN]])
 * 
 */

var numeros = [1, 2, 3, 11, 23, 11, 321, 56];
numeros.forEach(function (element) {
  console.log(element * 2 / 3);
});
var objet = [{
  name: "iwinser",
  lastName: "sanchez"
}, {
  name: "Aljadys",
  lastName: "Llory"
}, {
  name: "IASLL",
  lastName: "sanchez llory"
}];
var c = 0;
objet.forEach(function (i) {
  c++;
  console.log(Object.values(i) + " imprimiendo esto " + c);
}); //solo puedo crear un array nuevo asi ya que si fuera de otro modo seria utilizar el metodo push

var n = varios[6].concat(arr);
console.log(n);