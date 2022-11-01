"use strict";
exports.__esModule = true;
var Turno = /** @class */ (function () {
    function Turno(num_turno, medico, paciente, horario) {
        this.num_turno = num_turno;
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
    }
    Turno.prototype.getNumTurno = function () {
        return this.num_turno;
    };
    Turno.prototype.getMedico = function () {
        return this.medico;
    };
    Turno.prototype.setMedico = function (nuevoNombre) {
        this.medico = nuevoNombre;
    };
    Turno.prototype.getPaciente = function () {
        return this.paciente;
    };
    Turno.prototype.setPaciente = function (nuevoNombre) {
        this.paciente = nuevoNombre;
    };
    Turno.prototype.getHorario = function () {
        return this.horario;
    };
    Turno.prototype.setHorario = function (nuevoHorario) {
        this.horario = nuevoHorario;
    };
    return Turno;
}());
exports["default"] = Turno;
