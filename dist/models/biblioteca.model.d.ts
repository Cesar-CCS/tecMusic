import { Entity } from '@loopback/repository';
export declare class Biblioteca extends Entity {
    clave: number;
    nombre: string;
    [prop: string]: any;
    constructor(data?: Partial<Biblioteca>);
}
export interface BibliotecaRelations {
}
export declare type BibliotecaWithRelations = Biblioteca & BibliotecaRelations;
