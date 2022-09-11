"use strict";

/* ## 1. Contraseña válida

Escribir una función llamada `contrasenaValida` que reciba un string y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".De lo contrario debe retornar`false`.

```javascript
// escribe tu respuesta acá

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false */
function passwordValidate(texto) {
  if (texto == "2Fj(jjbFsuj" || texto == "eoZiugBf&g9") {
    return true;
  } else {
    console.log("no corresponde");
  }
}

passwordValidate("hhddhajh");
passwordValidate("2Fj(jjbFsuj");