import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TecMusicDsDataSource} from '../datasources';
import {Biblioteca, BibliotecaRelations} from '../models';

export class BibliotecaRepository extends DefaultCrudRepository<
  Biblioteca,
  typeof Biblioteca.prototype.clave,
  BibliotecaRelations
> {
  constructor(
    @inject('datasources.tecMusicDS') dataSource: TecMusicDsDataSource,
  ) {
    super(Biblioteca, dataSource);
  }
}
