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
    constructor (tipoEntrada,color,idRaton,marca){
        super(tipoEntrada, marca);

        this._idRaton =Number(idRaton);
        this._contadorRatones = ++Raton.contadorRatones;       
    }
    
}

raton1 = new Raton ("usb","dell",34343);
console.log(raton1);