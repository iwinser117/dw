
function sumar(){
    const forma = document.getElementById(`forma`);
    let operandoA = forma[`operandoA`];
    let operandoB = forma[`operandoB`];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = `la operacion le faltan numeros`;
    document.getElementById(`resultado`).innerHTML = `resultado : ${resultado}`;
    console.log(`resultado : ${resultado}`);
}



function restar(){
    const forma = document.getElementById(`forma`);
    let operandoA = forma[`operandoA`];
    let operandoB = forma[`operandoB`];
    let resultadoResta = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultado))
        resultadoResta = `la operacion le faltan numeros`;
    document.getElementById(`resultadoResta`).innerHTML = `resultado : ${resultado}`;
    console.log(`resultado : ${resultadoResta}`);
}
