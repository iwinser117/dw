const numeros = [1, 2, 3, 11, 23, 11, 321, 56]
const letras = ["a", "b", "c", "d"]
const diasSemana = ["lunes","martes","miercoles" , "jueves", "viernes", "sabado", "domingo"]
const names = ["a"]

numeros.forEach

//recorrer arrays
//for
for(i = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}

//recorriendo con un  forEach y realizando operaciones alli mismo
numeros.forEach(numero => {
    const al2 = numero+1;
    if (al2 % 2 == 0){
        console.log(al2)
    }
});

//añadiendo texto a la variable
diasSemana.forEach(dia =>{
    console.log(`hola hoy es ${dia}\n`);
})

myobject = {
      estudiante : {
        nombre:"est1",
        edad:12,
        nota: 4.6
    },
    
    estudiante2 : {
        nombre: "est2",
        edad: 14,
        nota: 4.7
    }
}
