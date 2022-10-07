"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaReproduccion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ListaReproduccion = class ListaReproduccion extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ListaReproduccion.prototype, "Clave", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ListaReproduccion.prototype, "Nombre", void 0);
ListaReproduccion = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ListaReproduccion);
exports.ListaReproduccion = ListaReproduccion;
//# sourceMappingURL=lista-reproduccion.model.js.map