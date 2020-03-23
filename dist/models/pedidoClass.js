"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor(_id, _descricao, _quantidade, _situacao) {
        this.id = _id;
        this.descricao = _descricao;
        this.quantidade = _quantidade;
        this.situacao = _situacao;
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
    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(_quantidade) {
        this.quantidade = _quantidade;
    }
    getSituacao() {
        return this.situacao;
    }
    setSituacao(_situacao) {
        this.situacao = _situacao;
    }
}
exports.default = new Pedido();
