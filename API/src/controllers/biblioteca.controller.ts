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
import {Biblioteca} from '../models';
import {BibliotecaRepository} from '../repositories';

export class BibliotecaController {
  constructor(
    @repository(BibliotecaRepository)
    public bibliotecaRepository : BibliotecaRepository,
  ) {}

  @post('/bibliotecas')
  @response(200, {
    description: 'Biblioteca model instance',
    content: {'application/json': {schema: getModelSchemaRef(Biblioteca)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Biblioteca, {
            title: 'NewBiblioteca',
            exclude: ['clave'],
          }),
        },
      },
    })
    biblioteca: Omit<Biblioteca, 'clave'>,
  ): Promise<Biblioteca> {
    return this.bibliotecaRepository.create(biblioteca);
  }

  @get('/bibliotecas/count')
  @response(200, {
    description: 'Biblioteca model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Biblioteca) where?: Where<Biblioteca>,
  ): Promise<Count> {
    return this.bibliotecaRepository.count(where);
  }

  @get('/bibliotecas')
  @response(200, {
    description: 'Array of Biblioteca model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Biblioteca, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Biblioteca) filter?: Filter<Biblioteca>,
  ): Promise<Biblioteca[]> {
    return this.bibliotecaRepository.find(filter);
  }

  @patch('/bibliotecas')
  @response(200, {
    description: 'Biblioteca PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Biblioteca, {partial: true}),
        },
      },
    })
    biblioteca: Biblioteca,
    @param.where(Biblioteca) where?: Where<Biblioteca>,
  ): Promise<Count> {
    return this.bibliotecaRepository.updateAll(biblioteca, where);
  }

  @get('/bibliotecas/{id}')
  @response(200, {
    description: 'Biblioteca model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Biblioteca, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Biblioteca, {exclude: 'where'}) filter?: FilterExcludingWhere<Biblioteca>
  ): Promise<Biblioteca> {
    return this.bibliotecaRepository.findById(id, filter);
  }

  @patch('/bibliotecas/{id}')
  @response(204, {
    description: 'Biblioteca PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Biblioteca, {partial: true}),
        },
      },
    })
    biblioteca: Biblioteca,
  ): Promise<void> {
    await this.bibliotecaRepository.updateById(id, biblioteca);
  }

  @put('/bibliotecas/{id}')
  @response(204, {
    description: 'Biblioteca PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() biblioteca: Biblioteca,
  ): Promise<void> {
    await this.bibliotecaRepository.replaceById(id, biblioteca);
  }

  @del('/bibliotecas/{id}')
  @response(204, {
    description: 'Biblioteca DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bibliotecaRepository.deleteById(id);
  }
}
