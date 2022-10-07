"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaRepController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ListaRepController = class ListaRepController {
    constructor(listaReproduccionRepository) {
        this.listaReproduccionRepository = listaReproduccionRepository;
    }
    async create(listaReproduccion) {
        return this.listaReproduccionRepository.create(listaReproduccion);
    }
    async count(where) {
        return this.listaReproduccionRepository.count(where);
    }
    async find(filter) {
        return this.listaReproduccionRepository.find(filter);
    }
    async updateAll(listaReproduccion, where) {
        return this.listaReproduccionRepository.updateAll(listaReproduccion, where);
    }
    async findById(id, filter) {
        return this.listaReproduccionRepository.findById(id, filter);
    }
    async updateById(id, listaReproduccion) {
        await this.listaReproduccionRepository.updateById(id, listaReproduccion);
    }
    async replaceById(id, listaReproduccion) {
        await this.listaReproduccionRepository.replaceById(id, listaReproduccion);
    }
    async deleteById(id) {
        await this.listaReproduccionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/lista-reproduccions'),
    (0, rest_1.response)(200, {
        description: 'ListaReproduccion model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ListaReproduccion) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ListaReproduccion, {
                    title: 'NewListaReproduccion',
                    exclude: ['Clave'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListaRepController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/lista-reproduccions/count'),
    (0, rest_1.response)(200, {
        description: 'ListaReproduccion model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ListaReproduccion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListaRepController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/lista-reproduccions'),
    (0, rest_1.response)(200, {
        description: 'Array of ListaReproduccion model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ListaReproduccion, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ListaReproduccion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListaRepController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/lista-reproduccions'),
    (0, rest_1.response)(200, {
        description: 'ListaReproduccion PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ListaReproduccion, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ListaReproduccion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ListaReproduccion, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListaRepController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/lista-reproduccions/{id}'),
    (0, rest_1.response)(200, {
        description: 'ListaReproduccion model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ListaReproduccion, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ListaReproduccion, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListaRepController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/lista-reproduccions/{id}'),
    (0, rest_1.response)(204, {
        description: 'ListaReproduccion PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ListaReproduccion, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ListaReproduccion]),
    tslib_1.__metadata("design:returntype", Promise)
], ListaRepController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/lista-reproduccions/{id}'),
    (0, rest_1.response)(204, {
        description: 'ListaReproduccion PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ListaReproduccion]),
    tslib_1.__metadata("design:returntype", Promise)
], ListaRepController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/lista-reproduccions/{id}'),
    (0, rest_1.response)(204, {
        description: 'ListaReproduccion DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ListaRepController.prototype, "deleteById", null);
ListaRepController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ListaReproduccionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ListaReproduccionRepository])
], ListaRepController);
exports.ListaRepController = ListaRepController;
//# sourceMappingURL=lista-rep.controller.js.map