import Medico from './Medico';
import Paciente from './Paciente';
import Horario from './Horario';

export default class Turno {
    private num_turno: number;
    private medico : Medico;
    private paciente : Paciente;
    private horario : Horario;

    public constructor(num_turno: number, medico: Medico, paciente: Paciente, horario: Horario) {
        this.num_turno = num_turno;
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
    }

 public getNumTurno() : number {
    return this.num_turno;
 }

 public getMedico() : Medico {
    return this.medico;
}

public setMedico(nuevoNombre: Medico ) : void {
    this.medico = nuevoNombre;
}

public getPaciente() : Paciente {
    return this.paciente;
}

public setPaciente(nuevoNombre: Paciente ) : void {
    this.paciente = nuevoNombre;
}

public getHorario() : Horario {
    return this.horario;
}

public setHorario(nuevoHorario: Horario ) : void {
    this.horario = nuevoHorario;
}


}