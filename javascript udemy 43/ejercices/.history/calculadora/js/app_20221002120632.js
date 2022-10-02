
function sumar(){
    const forma = document.getElementById(`forma`);
    let operandoA = forma[`operandoA`];
    let operandoB = forma[`operandoB`];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = `la operacion le faltan numeros`;
    document.getElementById(`resultado de la suma es`).innerHTML = `resultado : ${resultado}`;
    console.log(`resultado de la suma es : ${resultado}`);
}



function restar(){
    const forma = document.getElementById(`forma`);
    let operandoA = forma[`operandoA`];
    let operandoB = forma[`operandoB`];
    let resultadoResta = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultadoResta))
        resultadoResta = `la operacion le faltan numeros`;
    document.getElementById(`resultadoResta`).innerHTML = `resultado : ${resultadoResta}`;
    console.log(`resultado de la resta es : ${resultadoResta}`);
}
