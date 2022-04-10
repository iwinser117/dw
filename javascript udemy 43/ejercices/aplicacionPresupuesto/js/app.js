// "use strict"
const ingresos = [
    new Ingreso("salario", 400),
    new Ingreso(`venta coche`, 100)
];

const egresos = [
    new Egreso(`renta`, 100),
    new Egreso(`estudio`, 300)
];



let cargarApp = ()=>{
    cargarCabecero();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for (let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}
let totalEgresos = ()=> {
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}
let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto) ;
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso) ;
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos()) ;
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos()); 
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString(`en-US`, {style:`currency`, currency: "USD", minimunFractiondigits: 2});
}
const formatoPorcentaje= (valor) => {
    return valor.toLocaleString(`en-US`, { style: `percent`,  minimunFractiondigits: 2 });
}