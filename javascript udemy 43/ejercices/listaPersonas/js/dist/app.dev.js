"use strict";

var personas = [new Persona("iwinser", "sanchez"), new Persona("carlos", "Lara"), new Persona("dylan", "sanchez")];

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
  var persona = new Persona(nombre.value, apellido.value);
  console.log(persona);
  personas.push(persona);
}