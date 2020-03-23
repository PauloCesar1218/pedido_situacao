import ISituacao from '../interfaces/situacaoInterface';
class Pedido {
    private id: number;
    private descricao: string;
    private quantidade: number;
    private situacao: ISituacao;

    constructor(_id: number, _descricao: string, _quantidade: number, _situacao: ISituacao);
    constructor(_id?: number, _descricao?: string, _quantidade?: number, _situacao?: ISituacao);
    constructor(_id: number, _descricao: string, _quantidade: number, _situacao: ISituacao) {    
        this.id = _id
        this.descricao = _descricao
        this.quantidade = _quantidade
        this.situacao = _situacao
    }

    getId(): number {
        return this.id
    }

    setId(_id: number) {
        this.id = _id
    }

    getDescricao(): string {
        return this.descricao
    }

    setDescricao(_descricao: string) {
        this.descricao = _descricao
    }

    getQuantidade(): number {
        return this.quantidade
    }

    setQuantidade(_quantidade: number) {
        this.quantidade = _quantidade
    }

    getSituacao(): ISituacao {
        return this.situacao
    }

    setSituacao(_situacao: ISituacao) {
        this.situacao = _situacao
    }
}

export default new Pedido();
