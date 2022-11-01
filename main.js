"use strict";
exports.__esModule = true;
var GestorDeArchivos_1 = require("./class/GestorDeArchivos");
var Horario_1 = require("./class/Horario");
var ReadlineSync = require("readline-sync");
var helper_1 = require("./helper");
//ESPECIALIDAD
var arregloEspecialidades = [];
var datosEspecialidad = new GestorDeArchivos_1["default"]('./txt/especialidades.txt');
for (var i = 0; i < datosEspecialidad.getArregloString().length; i++) {
    (0, helper_1.cargarEspecialidades)(arregloEspecialidades, datosEspecialidad.getArregloString()[i]);
}
// crearEspecialidad(arregloEspecialidades);
// borrarEspecialidad(arregloEspecialidades, "odontologo");
console.log(arregloEspecialidades);
//-------------------------------------------------------------------------------------------------------------
//MEDICOS
var arregloMedicos = [];
var datosMedicos = new GestorDeArchivos_1["default"]('./txt/medicos.txt');
for (var i = 0; i < datosMedicos.getArregloString().length; i++) {
    datosEspecialidad.getArregloString[i];
    (0, helper_1.cargarMedicos)(arregloMedicos, arregloEspecialidades[(0, helper_1.crearNumRamdom)(arregloEspecialidades.length)], datosMedicos.getArregloString()[i]);
}
console.log(arregloMedicos);
for (var i = 0; i < arregloMedicos.length; i++) {
    console.log("El medico ".concat(arregloMedicos[i].getNombre(), " tiene la especialidad ").concat(arregloMedicos[i].getEspecialidad().getNombre()));
}
var matriculaIngresada = ReadlineSync.questionInt("Por favor, ingrese la matricula del medico a eliminar: ");
// borrarMedico(arregloMedicos, matriculaIngresada);
console.log(arregloMedicos);
// crearMedico(arregloMedicos,arregloEspecialidades);
(0, helper_1.modificarMedico)(arregloMedicos, 4, arregloEspecialidades);
//CARGAR PACIENTES AL ARREGLO
var arregloPacientes = [];
var datosPacientes = new GestorDeArchivos_1["default"]('./txt/pacientes.txt');
for (var i = 0; i < datosPacientes.getArregloString().length; i++) {
    (0, helper_1.cargarPacientes)(arregloPacientes, datosPacientes.getArregloString()[i]);
}
console.log(arregloPacientes);
//HORARIOS 
var horarios = [];
var horario1 = new Horario_1["default"]("17/11", 13);
var horario2 = new Horario_1["default"]("17/11", 14);
var horario3 = new Horario_1["default"]("17/11", 15);
var horario4 = new Horario_1["default"]("17/11", 16);
horarios.push(horario1, horario2, horario3, horario4);
//CREAMOS TURNOS
var turnos = [];
for (var i = 0; i < 4; i++) {
    (0, helper_1.crearTurno)(arregloMedicos, arregloPacientes, horarios, turnos);
}
// console.log(turnos);
for (var i = 0; i < turnos.length; i++) {
    console.log("El paciente ".concat(turnos[i].getPaciente().getNombre(), " tiene turno el dia ").concat(turnos[i].getHorario().getFecha(), ", a las ").concat(turnos[i].getHorario().getHora(), " hs, con el Dr ").concat(turnos[i].getMedico().getNombre(), " de especialidad ").concat(turnos[i].getMedico().getEspecialidad().getNombre(), ". Su numero de turno es ").concat(turnos[i].getNumTurno(), " "));
}
