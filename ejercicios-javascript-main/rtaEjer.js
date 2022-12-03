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
function bmi(peso, altura){
    const rsta = peso / (altura ** 2)
    if (rsta < 18.5 ){
        return "Bajo de peso";
    }
    if (rsta >= 18.5 && rsta<= 24.9){
        return "Normal";
    }
    if (rsta >= 25 && rsta <= 29.9){
        return "Sobrepeso";
    }
    if (rsta >= 30 ){
        return "Obeso";
    }
}
console.log(bmi(65, 1.8))
console.log(bmi(72, 1.6)) 
console.log(bmi(52, 1.75)) 
console.log(bmi(135, 1.7))

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
let otroarray = [1, "Hola", 2, "Mundo", [1, "Hola", 2,[1, "Hola", 2, "Mundo"] ,"Mundo"]]
let miArray= [1, "Hola", 2, "Mundo"]
function imprimiArreglo(array){
    let plano = array.flat(3);
    console.log(plano);
    for (let i=0; i<plano.length ;i++){
        
        console.log( `${plano[i]}`)
    }    
}
imprimiArreglo(miArray)


/* ## 5. Número de Likes

Escribe una función llamada `likes` que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

* 1400 se convierte en 1K
* 34,567 se convierte en 34K
* 7’456,345 se convierte en 7M.

Si el número es menor a 1000 se debe devolver el mismo número como un string.
 */

function like (nLikes){
    /* lo convierto a estring para saber la cantidad con la que estoy trabajando */
    let nString = nLikes.toString();
    console.log(nString.length)
    if(nString.length <=3){
        return console.log(`tienes ${nString} seguidores`)
    }
    if(nString.length <= 6){
        console.log(nString.slice(0, -3))
        return console.log(`tienes ${nString.slice(0,-3)}k de seguidores`)
    }
    if(nString.length >= 7){
        console.log(nString.slice(0, -5))
        return console.log(`tienes ${nString.slice(0,-5)}M de seguidores`)
    }

}
like(1000)
like(1345672)