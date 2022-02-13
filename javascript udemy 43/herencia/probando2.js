class Animal {

    static idAnimal = 0;
    constructor(nombre, color, talla){
        this._nombre = nombre;
        this._color = color;
        this._talla = talla;
        this._idAnimal = ++Animal.idAnimal;
    }
    get numer_Animal() {
        return this._idAnimal;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre (nombre) {
        this._nombre= nombre;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    get talla() {
        return this._talla;
    }
    set talla(talla) {
        this._talla = talla;
    }
    toString() {
        return `${this._idAnimal}    ${this._nombre}  ${this._color}  ${this._talla}`
    }


}
let animal1 = new Animal("perro", "amarillo",`grande`);
let animal2 = new Animal("gato", "azul", "pequeñño");
console.log(animal1);
console.log(animal2.toString());


class Tipo extends Animal {
    static contadorTipos = 0;

    constructor (nombre,color,talla,veneno){
        super(nombre, color,talla);
        this._veneno = veneno;
        this._idtipos = ++Tipo.contadorTipos;
    }
    get idTipo() {
        return this._idtipos;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color= color;
    }
    get talla() {
        return this._talla;
    }
    set talla(talla) {
        this._talla= talla;
    }
    get veneno() {
        return this._veneno;
    }
    set veneno(veneno) {
        this._veneno = veneno;
    }
    toString() {
        return `${super.toString()} ${this._idtipos} ${this._veneno}`;
    }
}
tipo7 = new Tipo("maria", "blue","chico","si");
console.log(tipo7.toString());


animal3 = new Animal ("oso", "grisly","medium","no");
console.log(animal3.toString());

animal55 = new Animal("osa", "parda", "chiqiuta");
console.log(animal55.numer_Animal);

class Categoria extends Animal {
    static cntador_categoria = 0;
    constructor (nombre, color ,talla , categorizacion,hola1){
        super(nombre, color, talla);
        this._categorizacion = categorizacion;
        this._idcontcate = ++Categoria.cntador_categoria;
        this._hola1 = hola1;
    }
    get hola17() {
        return this.id_contadprccat =++Categoria.cntador_categoria;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    get talla() {
        return this._talla;
    }
    set talla(talla) {
        this._talla = talla;
    }

/*     get veneno() {
        return this._veneno;
    }
    set veneno(veneno) {
        this._veneno = veneno;
    } */
    get categorizacion() {
        return this._categorizacion;
    }
    set categorizacion(categorizacion) {
        this._categorizacion = categorizacion;
    }
    toString() {
        return ` ${super.toString()} ${this._categorizacion} ${this._idcontcate} ${this._hola1}`
    }
}
categoria1 = new Categoria("osa", "parda", "osa", "parda", "osa",);
console.log(categoria1);
console.log(animal1.nombre);

//nombre, color, tamaño, veneno, categorizacion