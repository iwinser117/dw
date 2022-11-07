const diasSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "lunes",
  "viernes",
  "lunes",
  "sabado",
  "domingo",
  "lunes",
];
const numeros = [2, 3, 1, 4, 12, 5];


//le pasamos como callback una funcion
console.log(numeros.reduce((a, b) => a - b)); //da como resultado -23 igual se le puede asugnar una arrow function
console.log(numeros.reduce((a, b) => a + b, "elresultado de la suma  es: "));
console.log(numeros.reduce(suma)); //da como resultado 27al sumar cada item

function suma(a, b) {
  return a + b;
}
let cDias = diasSemana.reduce(function (vAnte, vActu) {
  return `${vAnte} ${vActu}`;
}, "los dias son:");
console.log(cDias);
