"use strict";
exports.__esModule = true;
var Horario = /** @class */ (function () {
    function Horario(fecha, hora) {
        this.fecha = fecha;
        this.hora = hora;
    }
    Horario.prototype.getFecha = function () {
        return this.fecha;
    };
    Horario.prototype.setFecha = function (nuevaFecha) {
        this.fecha = nuevaFecha;
    };
    Horario.prototype.getHora = function () {
        return this.hora;
    };
    Horario.prototype.setHora = function (nuevaHora) {
        this.hora = nuevaHora;
    };
    return Horario;
}());
exports["default"] = Horario;
