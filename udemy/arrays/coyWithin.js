const varios = [117, "iwinser", { nombre: 1, apellido: "sanchez" }, true, false, 2321, [1, 23, "tree"]];

/**
 * sintaxis
 * arr.copyWithin(target O desde donde se inicia a copiar)
 * arr.copyWithin(target, star seria algo como desde donde inicia a copiar y el star es e indice donde copia)
 * arr.copyWithin(target, star, end Y fin seria hasta el indice sin inclirlo para copiar)
 */
console.log(varios.copyWithin(1,2,4));
console.log(varios.copyWithin(1));
console.log(varios.copyWithin(-1, 6, 4));