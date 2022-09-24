"use strict";

var numeros = [1, 2, 3, 11, 23, 11, 321, 56];
var letras = ["a", "b", "c", "d"];
var diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]; //recorrer arrays
//for

for (i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
} //recorriendo con un  forEach y realizando operaciones alli mismo


numeros.forEach(function (numero) {
  var al2 = numero + 1;

  if (al2 % 2 == 0) {
    console.log(al2);
  }
}); //añadiendo texto a la variable

diasSemana.forEach(function (dia) {
  console.log("hola hoy es ".concat(dia, "\n"));
});
myobject = {
  estudiante: {
    nombre: "est1",
    edad: 12,
    nota: 4.6
  },
  estudiante2: {
    nombre: "est2",
    edad: 14,
    nota: 4.7
  }
};
var h = Object.values(myobject);
h;