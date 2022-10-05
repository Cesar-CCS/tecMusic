import {belongsTo, Entity, model, property} from '@loopback/repository';
import { Cliente } from './cliente.model';

@model({settings: {strict: false}})
export class Biblioteca extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    required: true,
  })
  clave: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  /*@belongsTo(() => Cliente)
  cliente: Cliente[];*/
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Biblioteca>) {
    super(data);
  }
}

export interface BibliotecaRelations {
  // describe navigational properties here
}

export type BibliotecaWithRelations = Biblioteca & BibliotecaRelations;
