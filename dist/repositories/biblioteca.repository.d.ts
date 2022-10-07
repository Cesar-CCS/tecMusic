import { DefaultCrudRepository } from '@loopback/repository';
import { TecMusicDsDataSource } from '../datasources';
import { Biblioteca, BibliotecaRelations } from '../models';
export declare class BibliotecaRepository extends DefaultCrudRepository<Biblioteca, typeof Biblioteca.prototype.clave, BibliotecaRelations> {
    constructor(dataSource: TecMusicDsDataSource);
}
