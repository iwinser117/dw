const mostrarReloj= () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = formatohora(fecha.getSeconds()); 
    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses =["ene", "feb", "mar", "abr", "may", "jun" , "jul", "ago", "sep", "oct", "nov", "dic"];
    const dias = ["dom", "lun", "mar", "mie" , "jue", "vie", "sab"];

    let diasSemana = dias[fecha.getDay()];
    let dia = fecha.getDay();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diasSemana}, ${dia} ${mes}`;
    document.getElementById(`fecha`).innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar")
}
const formatohora = (horas) => {
    if (horas < 10 )
        horas = "0"+ horas;
        return horas;
}
setInterval(mostrarReloj, 1000);