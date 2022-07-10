const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
/* 
Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios. */

let ovejasRojas;

for (let i = 0; i < ovejas.length; i++) {
    //console.log(ovejas[i].name);
    if(ovejas[i].color == "rojo"){
        i.filter(ovejas.name.includes("a", "A","n"));
        console.log(ovejas[i]);
    }
}