import { Entity } from '@loopback/repository';
export declare class ListaReproduccion extends Entity {
    Clave?: number;
    Nombre: string;
    [prop: string]: any;
    constructor(data?: Partial<ListaReproduccion>);
}
export interface ListaReproduccionRelations {
}
export declare type ListaReproduccionWithRelations = ListaReproduccion & ListaReproduccionRelations;
