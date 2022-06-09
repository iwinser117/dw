"use strict";

var precioOriginal = 120;
var descuento = 18;
calcularPrecioConDescuento;
var porcentajePrecioConDescuento = 100 - descuento;
var precioConDescuento = precioOriginal * porcentajePrecioConDescuento / 100;
console.log({
  descuento: descuento,
  precioOriginal: precioOriginal,
  precioConDescuento: precioConDescuento
});