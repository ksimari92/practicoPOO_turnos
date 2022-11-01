export default class Paciente {
    private nombre : string; 
    private dni : number;
    private telefono : number;
    private obra_social: string;

    public constructor(nombre:string, dni:number, telefono:number, obra_social: string){
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.obra_social = obra_social;
    }

    public getDni() : number {
        return this.dni;
    }

    public getNombre() : string {
        return this.nombre;
    }

    public setNombre(nuevoNombre: string ) : void {
        this.nombre = nuevoNombre;
    }

    public getTelefono() : number {
        return this.telefono;
    }

    public setTelefono(telefonoNuevo: number ) : void {
        this.telefono = telefonoNuevo;
    }

    public getObraSocial() : string {
        return this.obra_social;
    }

    public setObraSocial(nuevaObraSocial: string ) : void {
        this.obra_social = nuevaObraSocial;
    }

    


}