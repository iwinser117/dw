/* for (let contador = 0; contador < 10 ; contador ++){
    console.log(contador);
}
console.log ("se acabo el ciclo")

for (let contador = 0; contador <= 10; contador++){
    if (contador % 2 == 0){
    console.log(contador); 
    break;
    }
}
console.log("fin del ciclo") 



 */

// estiquetas

inicio:
for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
        break  inicio;
    }
}
console.log("fin del ciclo") 




//practica ciclos for
let dias = ["lunes", "martes","miercoles", "jueves", "viernes", "sabado", "domingo"];

for (i = 0 ; i <= dias.length ; i++){
    console.log(dias[i]);
}




let numero = 20;

for (i = numero ; i >= 1 ; i=i-3 ){
    console.log(i);
}
console.log("se acabaron los numeros");

for (i = numero ; i <=40; i = i+3){
    console.log(i)
}
 let sumas = 30 ;
 let suma = 10;
for (i = sumas; i <= 70; i+=suma){
    console.log(i);
}

let abc = ["a", "b", "c", "d", "e","f","g","h"];

for (i = 0; i <= abc.length-1; i ++){
    console.log(abc[i]);
}

let num17 = [1,2,3,4,5,6,7,8,9,10,11,1,3,15,16,17];

for (i = 0; i <= num17.length - 1; i ++) {
    console.log(num17[i]);
}

let fecha_hoy = new(Date);
let hora = "son las : " + fecha_hoy.getHours() + " : " + fecha_hoy.getMinutes() + " horas";
let dia ="dia " + fecha_hoy.getDay() + " del " + (fecha_hoy.getMonth()+1 ) + " del año " + fecha_hoy.getFullYear();
console.log(dia);
console.log(hora);


let dato_1 = new (Date);
let segundo_1 = dato_1.getSeconds();
console.log(segundo_1);

/* for (i = segundo_1 -1; i <= 60; i++){
    console.log(i);
} */

let toma_sopa = "";
let toda_sopa =7;
for (i = 1; i<= toda_sopa;i++){
    console.log(i);
}

let frase =  prompt("escribe tu nobnre");
console.log(frase.values());

frase.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
})



































































