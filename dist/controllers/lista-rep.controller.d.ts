import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ListaReproduccion } from '../models';
import { ListaReproduccionRepository } from '../repositories';
export declare class ListaRepController {
    listaReproduccionRepository: ListaReproduccionRepository;
    constructor(listaReproduccionRepository: ListaReproduccionRepository);
    create(listaReproduccion: Omit<ListaReproduccion, 'Clave'>): Promise<ListaReproduccion>;
    count(where?: Where<ListaReproduccion>): Promise<Count>;
    find(filter?: Filter<ListaReproduccion>): Promise<ListaReproduccion[]>;
    updateAll(listaReproduccion: ListaReproduccion, where?: Where<ListaReproduccion>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<ListaReproduccion>): Promise<ListaReproduccion>;
    updateById(id: number, listaReproduccion: ListaReproduccion): Promise<void>;
    replaceById(id: number, listaReproduccion: ListaReproduccion): Promise<void>;
    deleteById(id: number): Promise<void>;
}
