class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido =  apellido;
    }
}

let persona1 =new Persona("juan","perez");
console.log(persona1);

let persona2 = new Persona("carlos","Lara", 23);
console.log(persona2);


// metodo get y set para las propiedades de un clase
class Persona2 {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona10 = new Persona("juan", "perez");
persona10.nombre = "iwinser"; // set nombre
console.log(persona10.nombre); //get pero toca borrar el set para que se pueda ver





// no aplica con hoisting , toca primero declarar la clase

// no es posible crear bjetos antes de declara la clase


