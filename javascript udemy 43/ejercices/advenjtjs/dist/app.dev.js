"use strict";

var ovejas = [{
  name: 'Noa',
  color: 'azul'
}, {
  name: 'Euge',
  color: 'rojo'
}, {
  name: 'Navidad',
  color: 'rojo'
}, {
  name: 'Ki Na Ma',
  color: 'rojo'
}, {
  name: 'AAAAAaaaaa',
  color: 'rojo'
}, {
  name: 'Nnnnnnnn',
  color: 'rojo'
}];
/* 
 Cada oveja tiene un nombre y un color.Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios. */

/* 
Al ejecutar el método debería devolver lo siguiente:

 ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas) */
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

var ovejasRojas = ovejas.filter(function (ovejas) {
  return ovejas.color == "rojo";
});
var ovejasConLetras = ovejas.indexOf(oovejas.name == "a");
console.log(ovejasConLetras);