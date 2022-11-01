
export default class Especialidad {
    private nombre_especialidad: string;

    constructor(nombre_especialidad : string) {
        this.nombre_especialidad = nombre_especialidad;
    }

    public getNombre() : string {
        return this.nombre_especialidad;
    }
}