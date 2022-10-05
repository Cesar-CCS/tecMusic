import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ListaReproduccion} from '../models';
import {ListaReproduccionRepository} from '../repositories';

export class ListaRepController {
  constructor(
    @repository(ListaReproduccionRepository)
    public listaReproduccionRepository : ListaReproduccionRepository,
  ) {}

  @post('/lista-reproduccions')
  @response(200, {
    description: 'ListaReproduccion model instance',
    content: {'application/json': {schema: getModelSchemaRef(ListaReproduccion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaReproduccion, {
            title: 'NewListaReproduccion',
            exclude: ['Clave'],
          }),
        },
      },
    })
    listaReproduccion: Omit<ListaReproduccion, 'Clave'>,
  ): Promise<ListaReproduccion> {
    return this.listaReproduccionRepository.create(listaReproduccion);
  }

  @get('/lista-reproduccions/count')
  @response(200, {
    description: 'ListaReproduccion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListaReproduccion) where?: Where<ListaReproduccion>,
  ): Promise<Count> {
    return this.listaReproduccionRepository.count(where);
  }

  @get('/lista-reproduccions')
  @response(200, {
    description: 'Array of ListaReproduccion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListaReproduccion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListaReproduccion) filter?: Filter<ListaReproduccion>,
  ): Promise<ListaReproduccion[]> {
    return this.listaReproduccionRepository.find(filter);
  }

  @patch('/lista-reproduccions')
  @response(200, {
    description: 'ListaReproduccion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaReproduccion, {partial: true}),
        },
      },
    })
    listaReproduccion: ListaReproduccion,
    @param.where(ListaReproduccion) where?: Where<ListaReproduccion>,
  ): Promise<Count> {
    return this.listaReproduccionRepository.updateAll(listaReproduccion, where);
  }

  @get('/lista-reproduccions/{id}')
  @response(200, {
    description: 'ListaReproduccion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListaReproduccion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListaReproduccion, {exclude: 'where'}) filter?: FilterExcludingWhere<ListaReproduccion>
  ): Promise<ListaReproduccion> {
    return this.listaReproduccionRepository.findById(id, filter);
  }

  @patch('/lista-reproduccions/{id}')
  @response(204, {
    description: 'ListaReproduccion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaReproduccion, {partial: true}),
        },
      },
    })
    listaReproduccion: ListaReproduccion,
  ): Promise<void> {
    await this.listaReproduccionRepository.updateById(id, listaReproduccion);
  }

  @put('/lista-reproduccions/{id}')
  @response(204, {
    description: 'ListaReproduccion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listaReproduccion: ListaReproduccion,
  ): Promise<void> {
    await this.listaReproduccionRepository.replaceById(id, listaReproduccion);
  }

  @del('/lista-reproduccions/{id}')
  @response(204, {
    description: 'ListaReproduccion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listaReproduccionRepository.deleteById(id);
  }
}
