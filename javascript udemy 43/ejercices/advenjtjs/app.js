let ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]
/* 
 Cada oveja tiene un nombre y un color.Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios. */

/* 
Al ejecutar el método debería devolver lo siguiente:

 ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas) */

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
/* let ovejasRConA = ovejas.filter(ovejas => ovejas.name = ["a"]);
let ovejasRojas = ovejas.filter(ovejas => ovejas.color == "rojo");
console.log(ovejasRConA); */
// console.log(ovejas[ovejas.match(/ain/g))];

var obejass = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
const filterItems = (query) => {
    
    return ovejas.filter (item => {
        return item.name.match(/na/gi)/*  && item.name.includes(query = "a")  */&& item.color == "rojo";
    })
}
/* let i = 10;

for (let i = 10; i > 0; i--) {
console.log(i + "hola");

if (i == 1) {
    for (i = 1; i < 10; i++){ 
        console.log(i);
    }
}
} */





document.write(ovejas.name); // ['apple', 'grapes']
// console.log(filterItems('e'));
