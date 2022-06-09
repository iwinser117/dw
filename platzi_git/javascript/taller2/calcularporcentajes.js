const precioOriginal = 120;
const descuento = 18;


function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDescount (){
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;
    
    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;


    const precioConDescuentos = calcularPrecioConDescuento(priceValue,discountValue);

    const result = document.getElementById(`result`);
    result.innerHTML = "El precio con descuento son $" + precioConDescuentos  ;  
}

