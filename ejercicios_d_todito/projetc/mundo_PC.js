"use strict";
class DispositivoEntrada {
    constructor (tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada,marca,){
        super(tipoEntrada, marca);

        this._idRaton =++ Raton.contadorRatones;       
    }
    get idRaton() {
        return this._idRaton;
    }

   /*  set idRaton(idRaton) {
        this._idRaton = idRaton;
    } */

    toString() {
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
        /* return `
        idRatonRaton es: ${this.idRaton}
        tipo de entrada raton:${this.tipoEntrada} 
        marca es: ${this.marca} 
        `; */
    }
}

//dejo el ejemplo ya que estaba ensayando los metoso set y get ya que el get es solo para mostrar y con el set me sirve para poder ingresar y poder editar la inforacion que tengo en la  variable o en el metoso asignado a la clase que estoy trabajando
raton1 = new Raton("usb","de1l");
raton7 = new Raton("usb", "del2");
raton4 = new Raton("usb", "del3");
console.log(raton7.toString());










class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca,) {
        super(tipoEntrada, marca);

        this._idTeclado =  ++Teclado.contadorTeclado;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
       /*  return`
        el id de teclado es ${this.idTeclado}
        tipo entrada de teclado es:${this.tipoEntrada}
        marca del teclado es ${this.marca}
        
        `; */

        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

 let teclado1 = new Teclado ("tipoc","marcadAgua");
let teclado2 = new Teclado("tokc", "alhott");
console.log(teclado2.toString());



class Monitor {
    static contadorMonitores = 0;
    constructor (marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;    
        this._tamaño = tamaño;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    get marca() {
        return this._marca;
    }
    set marca (marca){
        this._marca = marca;
    }
    get tamaño() {
        return this._tamaño;
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }
    toString() {

        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño:  ${this._tamaño}]`;
       
    }
}

moni1 = new Monitor("dihhhl","pequeño");
moni2 = new Monitor("dilaa", "mediano");
moni4 = new Monitor(123, "grande");
console.log(moni2.toString());
console.log(moni4.toString());



class Computadora {
    static contadorComputadora = 0;
    
    constructor (nombre, monitor,teclado,raton){
        
    this._idComputadora = ++Computadora.contadorComputadora;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
    }
    set contadorComputadora(contadorComputadora) {
        this._contadorComputadora = contadorComputadora;
    }

     toString() {
         return `Computadora[${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this
        ._teclado}`;
       }
}

computadora1 = new Computadora("hp",moni1,teclado1,raton1);
computadora2 = new Computadora("armada",moni2, teclado2, raton7);
console.log(computadora2.toString())
console.log(computadora1.toString());





class Orden {
    static contadorOrdenes= 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarComputadora (computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for (let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`
        }

        console.log(`Orden: ${this._idOrden}, computadoras : ${computadorasOrden} `);
    }
}


let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2); 
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();