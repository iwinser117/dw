"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dato =
/*#__PURE__*/
function () {
  function Dato(descripcion, valor) {
    _classCallCheck(this, Dato);

    this._descripcion = descripcion;
    this._valor = valor;
  }

  _createClass(Dato, [{
    key: "descripcion",
    get: function get() {
      return this._descripcion;
    },
    set: function set(descripcion) {
      this._descripcion = descripcion;
    }
  }, {
    key: "valor",
    get: function get() {
      return this._valor;
    },
    set: function set(valor) {
      this._valor = valor;
    }
  }]);

  return Dato;
}();