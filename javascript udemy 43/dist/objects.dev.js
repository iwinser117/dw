"use strict";

var x = 10;
console.log(x.length);
var persona = {
  nombre: "iwinser",
  apellido: "aljadys",
  email: " iwinser.sancjez47@gmail.com",
  edad: 27,
  nombre_Completo: function nombre_Completo() {
    return this.nombre + " " + this.apellido;
  },
  datos_Users: function datos_Users() {
    return this.email + " " + this.edad;
  }
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombre_Completo());
console.log(persona.datos_Users()); // creacion de objetos en javascript 

var perosna2 = new Object();
perosna2.direccion = "una casa muy lejana 117";
perosna2.color = "amrillo";
perosna2.altura = 1, 67;
console.log(perosna2.color); // acceder a las propiedades de los objetos

console.log(persona.nombre);
console.log(persona["nombre"]); // for in

for (nombre_propiedad in persona) {
  console.log(nombre_propiedad);
  console.log(persona[nombre_propiedad]);
} // agragando y eliminando propiedades a un objetos en js


persona.tel = "5556667777";
console.log(persona);
delete persona.tel;
console.log(persona); // distintas formas de imprimir un objecto
// concatenar

console.log(persona.nombre + " " + persona.apellido); // for in

for (nombre_propiedad in persona) {
  console.log(persona[nombre_propiedad]);
}

var personaArray = Object.values(persona);
console.log(personaArray);
var personaString = JSON.stringify(persona);
console.log(personaString); // metodo get

var persona117 = {
  nombre: "iwinser",
  apellido: "aljadys",
  email: " iwinser.sancjez47@gmail.com",
  edad: 27,
  idioma: "es",

  get lang() {
    return this.idioma.toUpperCase();
  },

  get nombre_Completo() {
    return this.nombre + " " + this.apellido;
  },

  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },

  datos_Users: function datos_Users() {
    return this.email + " " + this.edad;
  }
};
console.log(persona117.nombre_Completo); // metodos set

console.log(persona117.lang);
persona117.lang = "en";
console.log(persona117.lang);
console.log(persona117.idioma); // metodo constructor objetos
// contructo de objetos tipo persona

function Persona(nombre1, apellido, email) {
  this.nombre = nombre1;
  this.apellido = apellido;
  this.email = email;
}

var padre = new Persona("dylan", "sanchez", "dyla@gmail");
console.log(padre);
var madre = new Persona("laura", "quintero", "corre@jp");
console.log(madre);
padre.nombre = "aljadys";
console.log(padre);
console.log(madre); // metodo cal

var persona1 = {
  nombre: "juan",
  apellido: "perez",
  nombre_Completo2: function nombre_Completo2() {
    return this.nombre + " " + this.apellido;
  }
};
var perosna3 = {
  nombre: "carlos",
  apellido: "lara"
}; // usu del metodo call 

console.log(persona1.nombre_Completo2());
console.log(persona1.nombre_Completo2.call(perosna3)); // paso de argumentos a funcion call

var persona5 = {
  nombre: "juan",
  apellido: "perez",
  nombre_Completo2: function nombre_Completo2(titulo, tel) {
    return titulo + ":" + this.nombre + " " + this.apellido + " , " + tel;
  }
};
var perosna6 = {
  nombre: "carlos",
  apellido: "lara"
};
console.log(persona5.nombre_Completo2("arqu", "3333"));
console.log(persona5.nombre_Completo2.call(perosna6, "ing", "332211")); // metodo apply

var persona7 = {
  nombre: "juan",
  apellido: "perez",
  nombre_Completo2: function nombre_Completo2(titulo, tel) {
    return titulo + ":" + this.nombre + " " + this.apellido + " , " + tel;
  }
};
var persona8 = {
  nombre: "carlos",
  apellido: "lara"
};
console.log(persona5.nombre_Completo2("arqu", "3333"));
console.log(persona5.nombre_Completo2.call(perosna6, "ing", "332211"));
console.log(persona7.nombre_Completo2("doc", "43523"));
var arreglo = ["doctor", "456233242"];
console.log(persona7.nombre_Completo2.apply(persona8, arreglo));