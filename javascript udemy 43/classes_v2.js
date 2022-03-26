class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(_nombre) {
        this.nombre = _nombre;
    }   

    get apellido() {
        return this.apellido;
    }
    set apellido(_apellido) {
        this.apellido = _apellido;    
    }
}

persona77 = new Persona("fernando","arciniegas");
console.log(persona77);




class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
    this._departamento = departamento;
    }
}



/* let persona1 = new Persona("iwinser", "sanchez");
console.log(persona1); */

let empleado1 =new Empleado ("maria", "jimenes", "sistemas");
console.log(empleado1);
console.log(empleado1._nombre); 