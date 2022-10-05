import {Entity, hasMany, model, property} from '@loopback/repository';
import { Biblioteca } from './biblioteca.model';

@model({settings: {strict: false}})
export class Cliente extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @hasMany(() => Biblioteca)
  biblioteca: Biblioteca[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
