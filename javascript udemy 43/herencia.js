class Persona {
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
    
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llamndo al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento (departamento){
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

let empleado1 = new Empleado("maria", "jimenez", "sistemas"); 
console.log(empleado1._nombre);
console.log(empleado1);
console.log( empleado1.nombreCompleto() );

