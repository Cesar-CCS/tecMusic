"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BibliotecaController = class BibliotecaController {
    constructor(bibliotecaRepository) {
        this.bibliotecaRepository = bibliotecaRepository;
    }
    async create(biblioteca) {
        return this.bibliotecaRepository.create(biblioteca);
    }
    async count(where) {
        return this.bibliotecaRepository.count(where);
    }
    async find(filter) {
        return this.bibliotecaRepository.find(filter);
    }
    async updateAll(biblioteca, where) {
        return this.bibliotecaRepository.updateAll(biblioteca, where);
    }
    async findById(id, filter) {
        return this.bibliotecaRepository.findById(id, filter);
    }
    async updateById(id, biblioteca) {
        await this.bibliotecaRepository.updateById(id, biblioteca);
    }
    async replaceById(id, biblioteca) {
        await this.bibliotecaRepository.replaceById(id, biblioteca);
    }
    async deleteById(id) {
        await this.bibliotecaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/bibliotecas'),
    (0, rest_1.response)(200, {
        description: 'Biblioteca model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Biblioteca) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Biblioteca, {
                    title: 'NewBiblioteca',
                    exclude: ['clave'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BibliotecaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bibliotecas/count'),
    (0, rest_1.response)(200, {
        description: 'Biblioteca model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Biblioteca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BibliotecaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bibliotecas'),
    (0, rest_1.response)(200, {
        description: 'Array of Biblioteca model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Biblioteca, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Biblioteca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BibliotecaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/bibliotecas'),
    (0, rest_1.response)(200, {
        description: 'Biblioteca PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Biblioteca, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Biblioteca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Biblioteca, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BibliotecaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bibliotecas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Biblioteca model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Biblioteca, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Biblioteca, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BibliotecaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/bibliotecas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Biblioteca PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Biblioteca, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Biblioteca]),
    tslib_1.__metadata("design:returntype", Promise)
], BibliotecaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/bibliotecas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Biblioteca PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Biblioteca]),
    tslib_1.__metadata("design:returntype", Promise)
], BibliotecaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/bibliotecas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Biblioteca DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], BibliotecaController.prototype, "deleteById", null);
BibliotecaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BibliotecaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BibliotecaRepository])
], BibliotecaController);
exports.BibliotecaController = BibliotecaController;
//# sourceMappingURL=biblioteca.controller.js.map