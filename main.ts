import Especialidad from "./class/Especialidad";
import Medico from './class/Medico';
import GestorDeArchivos from "./class/GestorDeArchivos";
import Paciente from "./class/Paciente";
import Horario from "./class/Horario";
import * as ReadlineSync from 'readline-sync';
import {cargarEspecialidades, crearEspecialidad, borrarEspecialidad, cargarMedicos, borrarMedico, crearNumRamdom, crearMedico, modificarMedico, cargarPacientes, crearTurno } from './helper';
import Turno from "./class/Turno";

//ESPECIALIDAD

let arregloEspecialidades : Array<Especialidad> = [];

let datosEspecialidad : GestorDeArchivos = new GestorDeArchivos('./txt/especialidades.txt');

for (let i : number = 0; i < datosEspecialidad.getArregloString().length; i++){
    cargarEspecialidades(arregloEspecialidades, datosEspecialidad.getArregloString()[i] );
}

// crearEspecialidad(arregloEspecialidades);
// borrarEspecialidad(arregloEspecialidades, "odontologo");
console.log(arregloEspecialidades);

//-------------------------------------------------------------------------------------------------------------
//MEDICOS

let arregloMedicos : Array<Medico> = [];

let datosMedicos : GestorDeArchivos = new GestorDeArchivos('./txt/medicos.txt');

for (let i :number =0;i < datosMedicos.getArregloString().length; i++){
    datosEspecialidad.getArregloString[i]
    cargarMedicos(arregloMedicos, arregloEspecialidades[crearNumRamdom(arregloEspecialidades.length)], datosMedicos.getArregloString()[i]);
}

console.log(arregloMedicos);

for (let i :number =0;i < arregloMedicos.length; i++){
    console.log(`El medico ${arregloMedicos[i].getNombre()} tiene la especialidad ${arregloMedicos[i].getEspecialidad().getNombre()}`)
}

let matriculaIngresada : number = ReadlineSync.questionInt("Por favor, ingrese la matricula del medico a eliminar: ");
// borrarMedico(arregloMedicos, matriculaIngresada);
console.log(arregloMedicos);

// crearMedico(arregloMedicos,arregloEspecialidades);

modificarMedico(arregloMedicos, 4, arregloEspecialidades);


//CARGAR PACIENTES AL ARREGLO
let arregloPacientes : Array<Paciente> = [];

let datosPacientes : GestorDeArchivos = new GestorDeArchivos('./txt/pacientes.txt');

for(let i:number =0;i < datosPacientes.getArregloString().length; i++){
    cargarPacientes(arregloPacientes, datosPacientes.getArregloString()[i]);
}

console.log(arregloPacientes);

//HORARIOS 
let horarios : Array<Horario> = [];

let horario1: Horario = new Horario("17/11",13);
let horario2: Horario = new Horario("17/11",14);
let horario3: Horario = new Horario("17/11",15);
let horario4: Horario = new Horario("17/11",16);

horarios.push(horario1,horario2,horario3,horario4);



//CREAMOS TURNOS
let turnos : Array<Turno> = [];


for (let i : number =0; i< 4; i++){
    crearTurno(arregloMedicos,arregloPacientes,horarios,turnos);
}

// console.log(turnos);
for(let i: number=0; i < turnos.length;i++){
  console.log(`El paciente ${turnos[i].getPaciente().getNombre()} tiene turno el dia ${turnos[i].getHorario().getFecha()}, a las ${turnos[i].getHorario().getHora()} hs, con el Dr ${turnos[i].getMedico().getNombre()} de especialidad ${turnos[i].getMedico().getEspecialidad().getNombre()}. Su numero de turno es ${turnos[i].getNumTurno()} `);
}












