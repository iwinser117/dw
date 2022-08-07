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


//solo puedo crear un array nuevo asi ya que si fuera de otro modo seria utilizar el metodo push
let n = varios[6].concat(arr);
console.log(n);