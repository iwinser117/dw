// let autos = new Array("bmw", "volvo", "toyota");

const autos = ["bmw", "volvo", "toyota"];
console.log(autos);
console.log(autos[1]);

for (let i=0; i < autos.length; i ++){
    
console.log  (autos[i]);
}

autos[1] = "volvo007";
console.log(autos[1]);
autos.push("audi");  /* usando el metodo push */
console.log(autos)

// agrgadno elementetos
console.log(autos.length);
autos[autos.length]= "cadillac";

console.log(autos);

// no es recomendable a menos que se desse programar
autos[5]= "porshe";
console.log(autos)



// formas de preguntar si estamos  trabajando con un arreglo
console.log(typeof autos);

console.log ( Array.isArray(autos) );
console.log(autos instanceof Array);

console.log(autos.concat("hola"));

for (let i =0; i< autos.length; i ++){
    console.log(i + " : " + autos[i] );
}


