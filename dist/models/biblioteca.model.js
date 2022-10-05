"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Biblioteca = class Biblioteca extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Biblioteca.prototype, "clave", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Biblioteca.prototype, "nombre", void 0);
Biblioteca = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Biblioteca);
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=biblioteca.model.js.map