import { Entity } from '@loopback/repository';
import { Biblioteca } from './biblioteca.model';
export declare class Cliente extends Entity {
    Nombre: string;
    Id?: number;
    biblioteca: Biblioteca[];
    [prop: string]: any;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
