"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const biblioteca_model_1 = require("./biblioteca.model");
let Cliente = class Cliente extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "Nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Cliente.prototype, "Id", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => biblioteca_model_1.Biblioteca),
    tslib_1.__metadata("design:type", Array)
], Cliente.prototype, "biblioteca", void 0);
Cliente = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.model.js.map