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

let peso = 0;
let altura = 0;
function bmi(peso, altura) {
  const rsta = peso / altura ** 2;
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
let otroarray = [
  1,
  "Hola",
  2,
  "Mundo",
  [1, "Hola", 2, [1, "Hola", 2, "Mundo"], "Mundo"],
];
let miArray = [1, "Hola", 2, "Mundo"];
function imprimiArreglo(array) {
  let plano = array.flat(3);
  console.log(plano);
  for (let i = 0; i < plano.length; i++) {
    console.log(`${plano[i]}`);
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
  let nString = nLikes.toString();
  if (nString.length <= 3) {
    return console.log(`tienes ${nString} seguidores`);
  }
  if (nString.length <= 6) {
    return console.log(`tienes ${nString.slice(0, -3)}k de seguidores`);
  }
  if (nString.length >= 7) {
    return console.log(`tienes ${nString.slice(0, -6)}M de seguidores`);
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
  let f3 = n % 3;
  let f5 = n % 5;
  console.log(f5);

  if (f3 == 0 && f5 == 0) {
    return "fizzbuzz";
  } else if (f3 == 0) {
    return "fizz";
  } else if (f5 == 0) {
    return "buzz";
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
  let acumulador = n1;
  let sumAcum = 0;
  if (n1 < n2) {
    for (let i = acumulador; i < n2; i++) {
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
  let count = 0;
  for (letra of string) {
    if (letra == caracter) {
      count++;
    }
  }
  console.log(`el caracter ${caracter}, se repite ${count} veces`);
}

numeroDeCaracteres("casa", "a");
numeroDeCaracteres("Hola Mundo", "o"); // 2
numeroDeCaracteres("MMMMM", "m"); // 0
numeroDeCaracteres("eeee", "e"); // 4

/* 
## 11. Sumar arreglo

Escribir una función llamada `sumarArreglo` que reciba un arreglo de números y retorne la suma de todos los elementos.
*/
// escribe tu respuesta acá
function sumarArreglo(arreglo) {
  let acum = 0;
  for (let i = 0; i < arreglo.length; i++) {
    acum += arreglo[i];
  }
  return acum;
}
// código de prueba
console.log(sumarArreglo([3, 1, 2])); // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArreglo([])); // 0

/* ## 12. Multiplicar arreglo

Escribir una función llamada `multiplicarArreglo` que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
 */
function multiplicarArreglo(array) {
  let acum = 1;

  for (let i = 0; i < array.length; i++) {
    reMul = acum * array[i];
    console.log(reMul);
    acum = reMul;
    console.log(acum);
  }
  return acum;
}
// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1

/* ## 13. Remover ceros

Escribir una función llamada `removerCeros` que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

```javascript
// escribe tu respuesta acá */
function removerCeros(array) {
  let sinCero = [];
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      n = array[i];
      sinCero.push(n);
    }
  }
  return sinCero;
}
// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []

/* ## 14. Sumar arreglo entre el rango

Escribir una función llamada `sumarArreglo` que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

**Nota:** puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.
 
```javascript
// escribe tu respuesta acá
*/
function sumarArregloEntre(arreglo, a, b) {
  let acum = arreglo[a];
  console.log(arreglo[a]);
  console.log(arreglo[b]);
  console.log(a);
  if (a < b) {
    for (let i = arreglo[a]; i < arreglo[b]; i++) {
      console.log(arreglo[i]);
      acum += arreglo[i];
      console.log(acum);
    }
  } else {
    acum = 0;
  }

  return acum;
}
// código de prueba
console.log(sumarArregloEntre([1, 2, 3], 1, 2)); // 5
console.log(sumarArregloEntre([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArregloEntre([7, 8, 9], 0, 0)); // 0

/* ## 15. Transcribir ADN a ARN

Escribir una función llamada `transcribir` que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

* G -> C
* C -> G
* T -> A
* A -> U */

function transcribir(cadena) {
  let arrCad = Array.from(cadena);

  for (let letra = 0; letra < arrCad.length; letra++) {
    console.log(arrCad);
    if (arrCad[letra] === "G") {
      arrCad[letra] = "C";
      console.log(arrCad[letra]);
    } else if (arrCad[letra] === "C") {
      arrCad[letra] = "G";
      console.log(arrCad[letra]);
    }
    if (arrCad[letra] === "T") {
      arrCad[letra] = "A";
      console.log(arrCad[letra]);
    } else if (arrCad[letra] === "A") {
      arrCad[letra] = "U";
      console.log(arrCad[letra]);
    }
  }
  return arrCad.join("");
}

// código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

/* ## 16. Capitalizar palabra

Escribir una función llamada `capitalizar` que reciba un string y capitalice la primera letra:

```javascript
// escribe tu función acá
*/
const capitalizar = (cadena) => cadena != "" ? cadena[0].toUpperCase() + cadena.substring(1) : "";


// código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""
