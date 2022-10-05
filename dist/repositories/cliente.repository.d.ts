import { DefaultCrudRepository } from '@loopback/repository';
import { TecMusicDsDataSource } from '../datasources';
import { Cliente, ClienteRelations } from '../models';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.Id, ClienteRelations> {
    constructor(dataSource: TecMusicDsDataSource);
}
