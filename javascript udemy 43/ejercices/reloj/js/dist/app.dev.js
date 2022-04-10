"use strict";

var mostrarReloj = function mostrarReloj() {
  var fecha = new Date();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = formatohora(fecha.getSeconds());
  document.getElementById("hora").innerHTML = "".concat(hora, ":").concat(minutos, ":").concat(segundos);
  var meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  var dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
  var diasSemana = dias[fecha.getDay()];
  var dia = fecha.getDay();
  var mes = meses[fecha.getMonth()];
  var fechaTexto = "".concat(diasSemana, ", ").concat(dia, " ").concat(mes);
  document.getElementById("fecha").innerHTML = fechaTexto;
  document.getElementById("contenedor").classList.toggle("animar");
};

var formatohora = function formatohora(horas) {
  if (horas < 10) horas = "0" + horas;
  return horas;
};

setInterval(mostrarReloj, 1000);