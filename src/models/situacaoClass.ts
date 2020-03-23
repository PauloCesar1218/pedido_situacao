class Situacao {
    private id: number | undefined;
    private descricao: string | undefined;

    constructor();
    constructor(_id: number, _descricao: string);
    constructor(_id?: number, _descricao?: string) {    
        this.id = _id
        this.descricao = _descricao
    }

    getId(): number | undefined {
        return this.id
    }

    setId(_id: number) {
        this.id = _id
    }

    getDescricao(): string | undefined {
        return this.descricao
    }

    setDescricao(_descricao: string) {
        this.descricao = _descricao
    }
}

export default new Situacao();
