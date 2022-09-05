"use strict";

//array de objetos
var empresa = [{
  id: 0,
  nombre: "iwinser",
  apellidos: "sanchez",
  edad: 27
}, {
  id: 1,
  nombre: "Dylan",
  apellidos: "sanchez",
  edad: 5
}];
console.log(empresa.concat({
  nombre: "sandra",
  apellido: "donado"
}));
/* empresa.every(empresa => {
    console.log(empresa =="sandra")
}) */
//some ---algunos
//nos devuelve elemntos por elemntos si son true o false 

/* empresa.some("iwinser") */

frutas = ["limon", "banana", "pera", "manzana", "mm"];
frutas.filter(function (fruta) {
  if (fruta.length > 5) {
    console.log("".concat(fruta, " tiene mas de 5 caracteres"));
  } else {
    console.log("".concat(fruta, " tiene menos de 5 caracteres"));
  }
}); //find nos busca la primera coincidencia osea todas pero nos muestra solo la primera

/* frutas.find(fruta => {
    if (fruta == "banana"){
        console.log(fruta)
    }
})
 */
//metodo forEach
//por cada elemento nos recorre el arrays

frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});
var ultimo = frutas.push("naranja");
console.log(frutas);
var sultimo = frutas.pop();
console.log(frutas);
console.log(frutas.length);
console.log(frutas.splice(1, 2, 3));