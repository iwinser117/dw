"use strict";

console.log("aplicacion calculadoraa");

function sumar() {
  var forma = document.getElementById("forma");
  var operandoA = forma["operandoA"];
  var operandoB = forma["operandoA"];
  var resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  document.getElementById("resultado").innerHTML = "resultado ".concat(resultado);
  if (isNaN) resultado;
  resultado = "la operacion le faltan numeros";
}