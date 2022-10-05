import { DefaultCrudRepository } from '@loopback/repository';
import { TecMusicDsDataSource } from '../datasources';
import { ListaReproduccion, ListaReproduccionRelations } from '../models';
export declare class ListaReproduccionRepository extends DefaultCrudRepository<ListaReproduccion, typeof ListaReproduccion.prototype.Clave, ListaReproduccionRelations> {
    constructor(dataSource: TecMusicDsDataSource);
}
