"use strict";
exports.__esModule = true;
exports.crearTurno = exports.cargarPacientes = exports.modificarMedico = exports.crearMedico = exports.borrarMedico = exports.cargarMedicos = exports.borrarEspecialidad = exports.crearEspecialidad = exports.cargarEspecialidades = exports.crearNumRamdom = void 0;
var Especialidad_1 = require("./class/Especialidad");
var Medico_1 = require("./class/Medico");
var Paciente_1 = require("./class/Paciente");
var ReadlineSync = require("readline-sync");
var Turno_1 = require("./class/Turno");
//CRUD = CREATE READ UPDATE DELETE
function crearNumRamdom(max) {
    return Math.floor(Math.random() * max); //Math.floor 
}
exports.crearNumRamdom = crearNumRamdom;
//FUNCIONES DE ESPECIALIDAD
function cargarEspecialidades(arr, especialidad) {
    var nuevaEspecialidad = new Especialidad_1["default"](especialidad);
    arr.push(nuevaEspecialidad);
    return arr;
}
exports.cargarEspecialidades = cargarEspecialidades;
//funcion para crear una especialidad
function crearEspecialidad(arr) {
    var nuevaEspecialidad = ReadlineSync.question("ingrese el nombre de la nueva especialidad: ");
    var especialidad = new Especialidad_1["default"](nuevaEspecialidad);
    arr.push(especialidad);
    return especialidad;
}
exports.crearEspecialidad = crearEspecialidad;
function borrarEspecialidad(arr, especialidad) {
    for (var i = 0; i < arr.length; i++) {
        if (especialidad == arr[i].getNombre()) {
            arr.splice(i, 1);
        }
    }
}
exports.borrarEspecialidad = borrarEspecialidad;
//FUNCIONES PARA MEDICOS
function cargarMedicos(arrMedico, especialidad, medico) {
    var datos = medico.split(',');
    var nombre = datos[0];
    var matricula = Number(datos[1]);
    var nuevoMedico = new Medico_1["default"](nombre, matricula, especialidad);
    arrMedico.push(nuevoMedico);
    return arrMedico;
}
exports.cargarMedicos = cargarMedicos;
function borrarMedico(arr, matricula) {
    for (var i = 0; i < arr.length; i++) {
        if (matricula == arr[i].getMatricula()) {
            arr.splice(i, 1);
            console.log("El medico ha sico eliminado");
        }
    }
}
exports.borrarMedico = borrarMedico;
function crearMedico(arregloMedicos, arregloEspecialidades) {
    var nombre = ReadlineSync.question("Ingrese el nombre y apellido del medico: ");
    var matricula = ReadlineSync.questionInt("Ingrese la matricula del medico: ");
    var especialidad = arregloEspecialidades[crearNumRamdom(arregloEspecialidades.length)];
    var nuevoMedico = new Medico_1["default"](nombre, matricula, especialidad);
    arregloMedicos.push(nuevoMedico);
    console.log(arregloMedicos);
}
exports.crearMedico = crearMedico;
function modificarMedico(arregloMedicos, posicion, arregloEspecialidades) {
    var nombre = ReadlineSync.question("Ingrese el nombre modificado: ");
    var matricula = ReadlineSync.questionInt("Ingrese la nuevo matricula: ");
    var especialidad = arregloEspecialidades[crearNumRamdom(arregloEspecialidades.length)];
    var medicoModificado = new Medico_1["default"](nombre, matricula, especialidad);
    delete arregloMedicos[posicion];
    arregloMedicos[posicion] = medicoModificado;
    console.log(arregloMedicos);
}
exports.modificarMedico = modificarMedico;
//FUNCIONES PARA PACIENTES
function cargarPacientes(arrPacientes, paciente) {
    var datos = paciente.split(',');
    var nombre = datos[0];
    var dni = Number(datos[1]);
    var telefono = Number(datos[2]);
    var obra_social = datos[3];
    var nuevoPaciente = new Paciente_1["default"](nombre, dni, telefono, obra_social);
    arrPacientes.push(nuevoPaciente);
    return arrPacientes;
}
exports.cargarPacientes = cargarPacientes;
//TAREA CREAR PACIENTE, BORRAR PACIENTE, MODIFICAR PACIENTE
//FUNCION PARA CREAR UN TURNO
function crearTurno(arregloMedicos, arregloPacientes, arregloHorario, arregloTurnos) {
    var num_turno = crearNumRamdom(1000);
    var medico = arregloMedicos[crearNumRamdom(arregloMedicos.length)];
    var paciente = arregloPacientes[crearNumRamdom(arregloPacientes.length)];
    var horario = arregloHorario[crearNumRamdom(arregloHorario.length)];
    var nuevoTurno = new Turno_1["default"](num_turno, medico, paciente, horario);
    arregloTurnos.push(nuevoTurno);
    return arregloTurnos;
}
exports.crearTurno = crearTurno;
