console.log(`aplicacion calculadoraa`)
function sumar(){
    const forma = document.getElementById(`forma`);
    let operandoA = forma[`operandoA`];
    let operandoB = forma[`operandoA`];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    document.getElementById(`resultado`).innerHTML = `resultado ${resultado}`;
    if(isNaN)(resultado)
        resultado = `la operacion le faltan numeros`;
    
}