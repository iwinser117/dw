const varios = [117, "iwinser", { nombre: 1, apellido: "sanchez" }, true, false, 2321, [1, 23, "tree"]];
let arr = [1, 2, 3];
let arra1 = {n2 : 22, m : "text"};
//se usa para unir 2 o mas arreglos
let n1 = varios.concat(arr);
let n2 = varios.concat(arra1);
console.log(n2);
/**
 * Sintaxis
 * 
 * var nuevoArray = viejoArray.CONCAT(valor1[,valor2[,...valorN]])
 * 
 */
const numeros = [1, 2, 3, 11, 23, 11, 321, 56];
numeros.forEach(element => {
    console.log((element * 2)/ 3);
});

const objet = [
    {
        name : "iwinser",
        lastName : "sanchez"
    },
    {
        name : "Aljadys",
        lastName : "Llory"
    },
    {
        name : "IASLL",
        lastName : "sanchez llory"
    }
];
let c = 0;
objet.forEach(i => {

c++
console.log(Object.values(i)+ " imprimiendo esto " + c);
})

//solo puedo crear un array nuevo asi ya que si fuera de otro modo seria utilizar el metodo push
let n = varios[6].concat(arr);
console.log(n);