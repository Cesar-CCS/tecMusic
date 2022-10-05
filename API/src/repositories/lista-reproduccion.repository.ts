import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TecMusicDsDataSource} from '../datasources';
import {ListaReproduccion, ListaReproduccionRelations} from '../models';

export class ListaReproduccionRepository extends DefaultCrudRepository<
  ListaReproduccion,
  typeof ListaReproduccion.prototype.Clave,
  ListaReproduccionRelations
> {
  constructor(
    @inject('datasources.tecMusicDS') dataSource: TecMusicDsDataSource,
  ) {
    super(ListaReproduccion, dataSource);
  }
}
