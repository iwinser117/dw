"use strict";

/* 
## 3. IMC (ïndice de masa corporal)

El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: `peso / altura^2`

Escribir una función llamada `bmi` que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

* "Bajo de peso" si el BMI < 18.5
* "Normal" si está entre 18.5 y 24.9
* "Sobrepeso" si está entre 25 y 29.9
* "Obeso" si es igual o mayor a 30


// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso" */
var peso = 0;
var altura = 0;

function bmi(peso, altura) {
  var rsta = peso / Math.pow(altura, 2);

  if (rsta < 18.5) {
    return "Bajo de peso";
  }

  if (rsta >= 18.5 && rsta <= 24.9) {
    return "Normal";
  }

  if (rsta >= 25 && rsta <= 29.9) {
    return "Sobrepeso";
  }

  if (rsta >= 30) {
    return "Obeso";
  }
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
console.log(bmi(135, 1.7));
/* 
## 4. Imprimir un arreglo

Escribir una función llamada `imprimirArreglo` que reciba un arreglo e imprima cada elemento en una línea a parte:

```javascript
// escribe tu respuesta acá

// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo
``` */

var otroarray = [1, "Hola", 2, "Mundo", [1, "Hola", 2, [1, "Hola", 2, "Mundo"], "Mundo"]];
var miArray = [1, "Hola", 2, "Mundo"];

function imprimiArreglo(array) {
  var plano = array.flat(3);
  console.log(plano);

  for (var i = 0; i < plano.length; i++) {
    console.log("".concat(plano[i]));
  }
}

imprimiArreglo(miArray);
/* ## 5. Número de Likes

Escribe una función llamada `likes` que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

* 1400 se convierte en 1K
* 34,567 se convierte en 34K
* 7’456,345 se convierte en 7M.

Si el número es menor a 1000 se debe devolver el mismo número como un string.
 */

function like(nLikes) {
  /* lo convierto a estring para saber la cantidad con la que estoy trabajando */
  var nString = nLikes.toString();

  if (nString.length <= 3) {
    return console.log("tienes ".concat(nString, " seguidores"));
  }

  if (nString.length <= 6) {
    return console.log("tienes ".concat(nString.slice(0, -3), "k de seguidores"));
  }

  if (nString.length >= 7) {
    return console.log("tienes ".concat(nString.slice(0, -6), "M de seguidores"));
  }
}

like(798);
like(1900);
like(54000);
like(120800);
like(5222444);
/* 
## 6. FizzBuzz

Escribir una función llamada `fizzBuzz` que reciba un número y retorne un string de acuerdo a lo siguiente:

* "fizz" si el número es múltiplo de 3.
* "buzz" si el número es múltiplo de 5.
* "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
* Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

```javascript
// escribe tu respuesta acá

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8
``` */

function fizzBuzz(n) {
  var f3 = n % 3;
  var f5 = n % 5;
  console.log(f5);

  if (f3 == 0 && f5 == 0) {
    return 'fizzbuzz';
  } else if (f3 == 0) {
    return 'fizz';
  } else if (f5 == 0) {
    return 'buzz';
  } else {
    return n;
  }
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));
/* ## 7. Contar rango de números

Escribir una función llamada `contarRango` que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

**Nota:** Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

```javascript
// escribe tu respuesta acá

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
``` */

function contarRango(n1, n2) {
  if (n1 < n2) {
    return n2 - n1 - 1;
  } else {
    return n1 - n2 - 1;
  }
}

console.log(contarRango(1, 9)); // 7

console.log(contarRango(1332, 8743)); // 7410

console.log(contarRango(3, 6));
console.log(contarRango(5, 6));
/* 
## 8. Sumar rango de números

Escribir una función llamada `sumarRango` que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

**Nota:** puedes asumir que el número inicial va a ser menor o igual que el número final.

```javascript
// escribe tu respuesta acá

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
``` */

function sumarRango(n1, n2) {
  var acumulador = n1;
  var sumAcum = 0;

  if (n1 < n2) {
    for (var i = acumulador; i < n2; i++) {
      acumulador = i;
      console.log(acumulador);
      sumAcum += acumulador;
      console.log(sumAcum);
      /* sum = n1 + acumulador + n2;
      console.log(sum) */
    }

    return sumAcum + n2;
  }

  return sumAcum;
}

console.log(sumarRango(0, 10)); // 55

console.log(sumarRango(12, 14)); // 39

console.log(sumarRango(5, 5)); // 0

/* ## 10. Número de caracteres

Escribir una función llamada `numeroDeCaracteres` que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4
``` */

function numeroDeCaracteres(string, caracter) {
  var count = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      letra = _step.value;

      if (letra == caracter) {
        count++;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log("el caracter ".concat(caracter, ", se repite ").concat(count, " veces"));
}

numeroDeCaracteres("casa", "a");
numeroDeCaracteres("Hola Mundo", "o"); // 2

numeroDeCaracteres("MMMMM", "m"); // 0

numeroDeCaracteres("eeee", "e"); // 4