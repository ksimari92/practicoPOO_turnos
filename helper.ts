import Especialidad from "./class/Especialidad";
import Medico from "./class/Medico";
import Paciente from "./class/Paciente";
import Horario from "./class/Horario";
import * as ReadlineSync from 'readline-sync';
import Turno from "./class/Turno";

//CRUD = CREATE READ UPDATE DELETE

export function crearNumRamdom(max :number) {
    return Math.floor(Math.random() * max);   //Math.floor 
}

//FUNCIONES DE ESPECIALIDAD

export function cargarEspecialidades(arr: Array<Especialidad>, especialidad : string ): Array<Especialidad>{

    let nuevaEspecialidad : Especialidad = new Especialidad(especialidad);
    arr.push(nuevaEspecialidad);

return arr;
}

//funcion para crear una especialidad
export function crearEspecialidad(arr: Array<Especialidad>) : Especialidad{
    let nuevaEspecialidad : string = ReadlineSync.question("ingrese el nombre de la nueva especialidad: ");
    let especialidad: Especialidad = new Especialidad(nuevaEspecialidad);
    arr.push(especialidad);

    return especialidad;
}

export function borrarEspecialidad(arr: Array<Especialidad>, especialidad: string){
    for(let i : number= 0; i < arr.length; i++ ){
        if (especialidad == arr[i].getNombre()){
            arr.splice(i, 1);
        }
    }
}

//FUNCIONES PARA MEDICOS
export function cargarMedicos(arrMedico: Array<Medico>, especialidad:Especialidad, medico :string) : Array<Medico>{
    let datos: string[]  = medico.split(',');
   let nombre : string = datos[0];
   let matricula : number = Number(datos[1]);

    let nuevoMedico : Medico = new Medico(nombre, matricula, especialidad);
    arrMedico.push(nuevoMedico);

    return arrMedico;
}

export function borrarMedico(arr: Array<Medico>, matricula:number) {
    for (let i : number =0; i < arr.length; i++){  
        if (matricula == arr[i].getMatricula()){
            arr.splice(i, 1);
            console.log("El medico ha sico eliminado");
        }
    }
}

export function crearMedico(arregloMedicos: Array<Medico>, arregloEspecialidades: Array<Especialidad>){

    let nombre : string = ReadlineSync.question("Ingrese el nombre y apellido del medico: ");
    let matricula: number = ReadlineSync.questionInt("Ingrese la matricula del medico: ");
    let especialidad: Especialidad = arregloEspecialidades[crearNumRamdom(arregloEspecialidades.length)];

    let nuevoMedico : Medico = new Medico(nombre, matricula, especialidad);

    arregloMedicos.push(nuevoMedico);

    console.log(arregloMedicos);
}

export function modificarMedico(arregloMedicos:Array<Medico>, posicion: number, arregloEspecialidades: Array<Especialidad>){
   
    let nombre: string = ReadlineSync.question("Ingrese el nombre modificado: ");
    let matricula : number = ReadlineSync.questionInt("Ingrese la nuevo matricula: ");
    let especialidad : Especialidad = arregloEspecialidades[crearNumRamdom(arregloEspecialidades.length)];

    let medicoModificado : Medico = new Medico(nombre, matricula, especialidad);

    delete arregloMedicos[posicion];
    arregloMedicos[posicion] = medicoModificado;

    console.log(arregloMedicos);
}


//FUNCIONES PARA PACIENTES
export function cargarPacientes(arrPacientes: Array<Paciente>, paciente :string) : Array<Paciente>{
    let datos: string[]  = paciente.split(',');
   let nombre : string = datos[0];
   let dni : number = Number(datos[1]);
   let telefono: number= Number(datos[2]) ;
   let obra_social: string= datos[3] ;

    let nuevoPaciente : Paciente = new Paciente(nombre,dni,telefono,obra_social) ;
    arrPacientes.push(nuevoPaciente);

    return arrPacientes;
}

//TAREA CREAR PACIENTE, BORRAR PACIENTE, MODIFICAR PACIENTE

//FUNCION PARA CREAR UN TURNO

export function crearTurno(arregloMedicos:Array<Medico>, arregloPacientes: Array<Paciente>, arregloHorario:Array<Horario>, arregloTurnos: Array<Turno>){
    let num_turno : number = crearNumRamdom(1000);
    let medico : Medico = arregloMedicos[crearNumRamdom(arregloMedicos.length)];
    let paciente : Paciente = arregloPacientes[crearNumRamdom(arregloPacientes.length)];
    let horario : Horario = arregloHorario[crearNumRamdom(arregloHorario.length)];

    let nuevoTurno : Turno = new Turno(num_turno,medico,paciente,horario);
    arregloTurnos.push(nuevoTurno);

    return arregloTurnos;

}