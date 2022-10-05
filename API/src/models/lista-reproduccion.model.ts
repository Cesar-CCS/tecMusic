import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ListaReproduccion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Clave?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaReproduccion>) {
    super(data);
  }
}

export interface ListaReproduccionRelations {
  // describe navigational properties here
}

export type ListaReproduccionWithRelations = ListaReproduccion & ListaReproduccionRelations;
