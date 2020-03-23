"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Situacao {
    constructor(_id, _descricao) {
        this.id = _id;
        this.descricao = _descricao;
    }
    getId() {
        return this.id;
    }
    setId(_id) {
        this.id = _id;
    }
    getDescricao() {
        return this.descricao;
    }
    setDescricao(_descricao) {
        this.descricao = _descricao;
    }
}
exports.default = new Situacao();
