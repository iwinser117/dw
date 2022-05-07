"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// crear un registro de usuarios con diferente operador, con su respectivo telefono, nombre , apellido y email. y otra clase que evidencie la empresa, su cargo con los demas datos...., y otra que relaciones familiares, y otra de solo mostrar los datos de la perosna
var Persona =
/*#__PURE__*/
function () {
  function Persona(nombre, apellido) {
    _classCallCheck(this, Persona);

    var contador = +Persona;
    this._nombre = nombre;
    this._apellido = apellido;
  }

  _createClass(Persona, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombre) {
      this._nombre = nombre;
    }
  }]);

  return Persona;
}();

var persona1 = new Persona("iwinser", "sanchez");
var persona2 = new Persona("iwinser", "sanchez");
console.log(persona2.contador);
/* class DatosPersona extends Persona {
    
} */
