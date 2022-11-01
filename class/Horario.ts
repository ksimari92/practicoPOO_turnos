export default class Horario {
    private fecha: string;
    private hora: number;

    constructor(fecha: string, hora:number){
        this.fecha = fecha;
        this.hora = hora;
    }

    public getFecha() : string {
        return this.fecha;
    }

    public setFecha(nuevaFecha: string ) : void {
        this.fecha = nuevaFecha;
    }

    public getHora() : number {
        return this.hora;
    }

    public setHora(nuevaHora: number ) : void {
        this.hora = nuevaHora;
    }

}