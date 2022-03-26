
// let numero1 =12;
// let numero2 = 3;

// if ( numero1 < numero2){
//     console.log(numero1);
// }else{
//     console.log(numero2);
// }
// /*  let dias = ["lunes","martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]; */

//  let diaIngresaado = "lunes";

// if (diaIngresaado == "miercoles") {
//     console.log("hoy es lunes");
// }
//  else if (diaIngresaado == "martes"){
//      console.log("es martes");
//  }
// else if (diaIngresaado == "jueves") {
//     console.log("es jjueves");
// }
//  else {
//      console.log("no es el dia");
//  }


//  for (let i =1 ; i <= 10; i++){
//      if (i % 2 !== 0){
//          continue;
//      }else {
//          console.log(i);
//      }
//  }
// let perosnaje = {
//     nombre : "iwinser",
//     apellido :"sanchez",
//     nombreColmpleto (){
//         return this.nombre + " " + this.apellido;
//     }
// }
// console.log(perosnaje.nombreColmpleto());


// function sumar (a, b){
//     console.log( a + b) ;
// }
// sumar(2,5);

// let km =198 ;

// if (km <= 100){
//     console.log("haz recoordio muy poco");
// }
// else if (km > 100 && km <200){
//     console.log("estas en promedio");
// }else {
//      console.log("has excedido");
// }
// /* for (km = 0; km <= 100; km++ ){
// console.log("haz recorrido 100 kmlometrs");
// } */

// let colores= {
//     primario : "blanco",
//     secundario : "gris",
//     tercero : "amamrillo",
// }
// console.log(colores.primario);

// let casas =["roja", "grande", "pequeña"];
// let carros = {
//     color: "rojo",

// }

// const caminar = () => {
//     return "estoy caminando";
// }
// console.log(caminar());

// let mas = (a, b) => {
//     console.log(a + b) ;
// };
// mas(2,4);
// let saludar = () => `hola mundo`;
// console.log(saludar());


// let regressObject = () => {
//     return ({nombre : "iwinser", apellido : "sanchez"})
// }
// console.log(regressObject())






// function funcion1 (hola){
//     hola;
//     console.log("fernando");
// }
// function funcion2 (a, b, parametro1){
//     let res = a + b;
//     parametro1(`el resultado es : ${res}`);
// }
// function funcion3 (c, d, parametro2){
//     let resResta = c -  d ;
//     parametro2;
//     return resResta;
// }

// funcion2(2, 11, funcion1, funcion3);

// // funcion3(let x,5,4,)
// let x = funcion3(5,2,funcion2(3,2,funcion1),funcion1("hola"));
// console.log(x);

// setTimeout(() => console.log(`hola mundo`),3000);

// let reloj = function (){
//     let fecha = new Date();
//     console.log(`
//      minutos : ${fecha.getMinutes()}
//       segundos: ${fecha.getSeconds()}`)
// }
// setInterval(reloj , 1000);

/* let promiseTest = (x) => {

    let flag = true;
    while(flag){
        flag = x == 1;
        return  new Promise((resolve, reject)=>{
            resolve("No necesito validaciones.")
            setTimeout(() => console.log("hola"), 3000)
        });
    }
    return console.log("Exception");
}

let promise = promiseTest(2)
promise.then((successMessage)=>{
    console.log("Paso por aqui.")
}).catch((err)=>{
    console.log("Exception " + err)
})

promiseTest() */

/* 


function multi (a, b) {
    console.log(a * b);
} 

function esposa_aljadis(){
    console.log("Se porta mal.")
}
esposa_aljadis();

multi(4,3);


let peresoso = {
    nombre : "iwinser" ,
    apellido : "sanchez",
    nombreCompleto: function(){
        nombre + " " + apellido
    } 
}

console.log(peresoso.nombreCompleto()); */
"use strict"

class Mascota {

    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
        this.clase = ["alta", "media", "puppy"];
    }

    get getNombre() {
        return this.nombre
    }

    nombreYRaza(){
        return this.nombre + " " + this.raza;
    }

    get nombreYClase(){
        return `Nombre: ${this.nombre} Clase:  ${this.clase[2]}`
    }
}

const mascota1 = new Mascota("Laica", "Chandoberman");
console.log(mascota1.nombreYClase);

https://linuxhint.com/getters-and-setters-in-javascript-class/