"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, dni, telefono, obra_social) {
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.obra_social = obra_social;
    }
    Paciente.prototype.getDni = function () {
        return this.dni;
    };
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Paciente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Paciente.prototype.setTelefono = function (telefonoNuevo) {
        this.telefono = telefonoNuevo;
    };
    Paciente.prototype.getObraSocial = function () {
        return this.obra_social;
    };
    Paciente.prototype.setObraSocial = function (nuevaObraSocial) {
        this.obra_social = nuevaObraSocial;
    };
    return Paciente;
}());
exports["default"] = Paciente;
