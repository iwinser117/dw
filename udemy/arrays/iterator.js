const varios = [ 117, "iwinser", { nombre: 1, apellido: "sanchez" }, true, false,  2321, [1, 23, "tree"]];

let eArr = varios[Symbol.iterator]();
//esta itearacion si funciona
for(let obj of varios){
    console.log(obj);
}

//iteracion alternativa
const eArr2 = [ "a", "b", "cv"]
let eArr1 = eArr2[Symbol.iterator]();
console.log(eArr1.next().values);
console.log(eArr1.next().values);
console.log(eArr1.next().values);

//no funciona en visual code


/**
 * otro iterador es entries()
 * y nos muestra el indice y su contenido
 */

/*
const iterator1 = varios.entries();

console.log(iterator1.next().value + "soy el primer iterator");
console.log(iterator1.next().value + "soy el segundo iterator");
console.log(iterator1.next().value );

for ( let i of iterator1){
    console.log(i);
}
*/


