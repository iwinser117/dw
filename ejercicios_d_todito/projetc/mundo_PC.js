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
    constructor(tipoEntrada,marca,idRaton){
        super(tipoEntrada, marca);

        this._idRaton =Number(idRaton);
        this._contadorRatones = ++Raton.contadorRatones;       
    }
    get idRaton() {
        return this._idRaton;
    }
   /*  set idRaton(idRaton) {
        this._idRaton = idRaton;
    } */

    toString() {
        return this.idRaton + " " + this.marca;
    }
}

//dejo el ejemplo ya que estaba ensayando los metoso set y get ya que el get es solo para mostrar y con el set me sirve para poder ingresar y poder editar la inforacion que tengo en la  variable o en el metoso asignado a la clase que estoy trabajando
raton1 = new Raton("usb","del",123);
raton2 = new Raton("usb", "del", 123);
raton4 = new Raton("usb", "del", 123);
raton4.idRaton = 5555;
console.log(raton4.toString());









class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca, idTeclado) {
        super(tipoEntrada, marca);

        this._idTeclado = Number(idTeclado);
        this._contadorTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado() {
        return this._idTeclado;
    }
}





class Monitor {
    static contadorMonitores = 0;
    constructor (idMonitor,marca, tamaño){
        this._idMonitor = idMonitor;
        this._marca = marca;    
        this._tamaño = tamaño;
        this._contadorMonitores = ++Monitor.contadorMonitores;
    }
}

moni1 = new Monitor(123,"dil","grande");
console.log(moni1);