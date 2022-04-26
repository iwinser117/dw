const ovejas = [
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
function filterItems(query) {
    return ovejas.filter(function () {
        return (query);
    })
}

console.log(filterItems('cxcz')); // ['apple', 'grapes']
console.log(filterItems('e'));