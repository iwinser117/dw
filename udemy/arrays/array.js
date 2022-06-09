//array de objetos

const empresa = [
    {
        id:0,
        nombre: "iwinser",
        apellidos:"sanchez",
        edad: 27
    },
    {
        id:1,
        nombre:"Dylan",
        apellidos: "sanchez",
        edad:5
    }
]
/* console.log(empresa); */
console.log(empresa.concat({nombre:"sandra",apellido:"donado"}))

/* empresa.every(empresa => {
    console.log(empresa =="sandra")
}) */


//some ---algunos
//nos devuelve elemntos por elemntos si son true o false 

/* empresa.some("iwinser") */


frutas = ["limon", "banana", "pera", "manzana", "mm"]

frutas.filter(fruta=>{
    if (fruta.length > 5){
        console.log(`${fruta} tiene mas de 5 caracteres`);
    }else {
        console.log(`${fruta} tiene menos de 5 caracteres`)
    }
})

