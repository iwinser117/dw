"use strict";

var personas = [];

function mostrarPersonas() {
  console.log("hoolla");
  var texto = "";

  for (var _i = 0, _personas = personas; _i < _personas.length; _i++) {
    var persona = _personas[_i];
    console.log(persona);
    texto += "<li>".concat(persona.nombre, " ").concat(persona.apellido, "</li>");
  }

  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  var forma = document.forms["forma"];
  var nombre = forma["nombre"];
  var apellido = forma["apellido"];

  if (nombre.value != "" && apellido.value != "") {
    var persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  } else {
    console.log("no hay nada que agregar");
  }
}