class Persona {
    constructor(nombre, apellido) {
        this.nombreDeclarado = nombre;
        this.apellidoDecarado = apellido;
    }
    get nombre(){
        return this.nombreDeclarado;
    }
    set nombre(nombreDeclarado) {
        this.nombre = nombreDeclarado;
    }   

    get apellido() {
        return this.apellidoDecarado;
    }
    set apellido(apellidoDecarado) {
        this.apellido = apellidoDecarado;    
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
    toString() {
        return this.nombre + " " + this.apellido;
    }
}



/* let persona1 = new Persona("iwinser", "sanchez");
console.log(persona1); */

let empleado1 =new Empleado ("maria", "jimenes", "sistemas");
console.log(empleado1.toString());
console.log(empleado1.apellido);
empleado1.apellidoDecarado = "sanchez de quesada";
console.log(empleado1.toString());