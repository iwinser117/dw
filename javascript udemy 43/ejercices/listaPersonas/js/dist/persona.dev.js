"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Persona =
/*#__PURE__*/
function () {
  function Persona(nombre, apellido) {
    _classCallCheck(this, Persona);

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
  }, {
    key: "apellido",
    get: function get() {
      return this._apellido;
    },
    set: function set(apellido) {
      this._apellido = apellido;
    }
  }]);

  return Persona;
}(); // let perosona17 = new Persona("aljadys", "sanhcez");
// console.log(perosona17)