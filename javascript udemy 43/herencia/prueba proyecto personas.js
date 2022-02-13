class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPerosna() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
        get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this.apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `${this.idPerosna} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona {
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad,sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return `${super.toString()}  ${this._idEmpleado}  ${this._sueldo}`;
    }
}


class Cliente extends Persona {
    static contadorCliente = 0;

    constructor(nombre,apellido,edad, fechaRegistro) {
        super(nombre,apellido,edad);
        this._idCliente = ++ Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

let persona1 = new Persona("juak" , "perez", 26);
console.log(persona1.toString());

let perosna2 = new Persona("iwinser", "sanchez",17);
console.log(perosna2.toString());

let empleado1 = new Empleado("karla","gomez", "33 ", 7000);
console.log(empleado1.toString())

let empleado2 = new Empleado("laura",  "quintero", 6 ,  6700);
console.log(empleado2.toString());

let cliente1 = new Cliente("migule" , "gomez", 45 , new Date());
console.log(cliente1.toString());

let cliente2 =new Cliente("maria", "lara",39 , new Date());
console.log(cliente2.toString());