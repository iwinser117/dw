// crear un registro de usuarios con diferente operador, con su respectivo telefono, nombre , apellido y email. y otra clase que evidencie la empresa, su cargo con los demas datos...., y otra que relaciones familiares, y otra de solo mostrar los datos de la perosna


class Persona {
    static contador = 1;
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        this.contador = Persona.contador++;
        this.nombreCompleto = `${this.nombre} ${this.apellido}`;
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
        this._apellido = apellido;
    }
    toString() {
        return `
            ${this.nombre}
            ${this.apellido}
            ${this.contador}`; 
    }
}
let persona1 = new Persona("iwinser", "sanchez");
let persona7 = new Persona("iwinser", "sanchez");
let persona2 = new Persona("iwinser", "sanchez");
console.log(persona7.nombreCompleto);

class DatosPersona extends Persona {
    constructor(nombre, apellido,telefono, email){
        super (nombre, apellido)
        this._telefono = telefono;
        this._email = email;
    }
    get telefono() {
        return this._telefono
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }
    get email (){
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    toString() {
        return`
            ${this.contador}
            los datos completos son:
            [ Nombre y Apellidos: ${this.nombreCompleto}
            Telefono:${this.telefono}
            Email:${this.email}]
        `
    }
}

let personaComplet = new DatosPersona("Dylan", "sanchez", 300, "iwinser@gmail.");
console.log(personaComplet.toString())

class Empresa {
    constructor(nombreEmpresa, cargo){
        this._nombreEmpresa = nombreEmpresa;
        this._cargo = cargo;
        this._persona = [];
    }   
    agregarPersona(persona){
        this._persona.push(persona);
    }
    mostrarDatosfinal(){
        let datesPersona = "";
        for (let person of this._persona){
            datesPersona += person;
        }
        console.log(datesPersona);
    }
}
let empr1 = new Empresa("oncor", "auditor",persona1)
let empr2 = new Empresa();
empr2.agregarPersona(persona7)
empr2.mostrarDatosfinal(persona7)
console.log(empr2);;
