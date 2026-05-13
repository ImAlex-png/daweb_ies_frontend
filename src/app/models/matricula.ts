import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Matricula {

    constructor(
        private _idMat: number,
        private _curso: number,
        private _notaMedia: number,
        private _alumno: Alumno,
        private _asignatura: Asignatura

    ){};

    get asignatura(): Asignatura {return this._asignatura;}
    set asignatura(value: Asignatura) {this._asignatura = value;}
    get alumno(): Alumno {return this._alumno;}
    set alumno(value: Alumno) {this._alumno = value;}
    get notaMedia(): number {return this._notaMedia;}
    set notaMedia(value: number) {this._notaMedia = value;}
    get curso(): number {return this._curso;}
    set curso(value: number) {this._curso = value;}
    get idMat(): number {return this._idMat;}
    set idMat(value: number) {this._idMat = value;}

    
}
