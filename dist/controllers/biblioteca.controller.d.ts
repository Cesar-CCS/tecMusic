import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Biblioteca } from '../models';
import { BibliotecaRepository } from '../repositories';
export declare class BibliotecaController {
    bibliotecaRepository: BibliotecaRepository;
    constructor(bibliotecaRepository: BibliotecaRepository);
    create(biblioteca: Omit<Biblioteca, 'clave'>): Promise<Biblioteca>;
    count(where?: Where<Biblioteca>): Promise<Count>;
    find(filter?: Filter<Biblioteca>): Promise<Biblioteca[]>;
    updateAll(biblioteca: Biblioteca, where?: Where<Biblioteca>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Biblioteca>): Promise<Biblioteca>;
    updateById(id: number, biblioteca: Biblioteca): Promise<void>;
    replaceById(id: number, biblioteca: Biblioteca): Promise<void>;
    deleteById(id: number): Promise<void>;
}
