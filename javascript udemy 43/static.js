class Persona {
    static contadorObjetosPersona = 7;


    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this.nombre;
    }
    set nombre(_nombre) {
        this.nombre = _nombre;
    }

    get apellido() {
        return this.apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() {//heredar metodos
        return this._nombre + " " + this._apellido;
    }
    toString() {
        return this.nombreCompleto();
    }
    static saludar (){
        console.log("saludos soy el metodo static");
    }
    static saludar_2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); // llamndo al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        return this._departamento = departamento;
    }
    //sobrescritura
    /* nombreCompleto (){//heredar metodos
        return this._nombre + " " + this._apellido + " " +this.departamento;
    } */
    nombreCompleto() {//heredar metodos
        return super.nombreCompleto() + " ," + this._departamento;
    }

}

let persona1 = new Persona("iwinser", "sanchez");
// persona1.saludar();// no es posble llamar un metodo desde un obnjeto
// console.log(persona1.nombre)
Persona.saludar();
// Persona.saludar_2(persona1);











// atributos estaticos
console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);



let empleado1 = new Empleado("jose", "maria", "hernandezz");
console.log(empleado1);



