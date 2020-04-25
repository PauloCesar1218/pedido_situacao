import IConta from '../interfaces/contaInterface';
export default new class Conta implements IConta {
    public id?: number;
    public nomeTitular?: string | undefined;
    public numeroConta?: number | undefined;
    public saldo?: number | undefined;

    getId(): number | undefined {
        return this.id
    }

    setId(_id: number) {
        this.id = _id
    }

    getnomeTitular(): string | undefined {
        return this.nomeTitular
    }

    setnomeTitular(_nomeTitular: string) {
        this.nomeTitular = _nomeTitular
    }

    getnumeroConta(): number | undefined {
        return this.numeroConta
    }

    setnumeroConta(_numeroConta: number) {
        this.numeroConta = _numeroConta
    }

    getsaldo(): number | undefined {
        return this.saldo
    }

    setsaldo(_saldo: number) {
        this.saldo = _saldo
    }

    deposito(vd: number): boolean {
        if (vd > 0) {
            this.saldo = vd;
            return true
        }
        return false;
    }

    saque(vs: number): boolean {
        if (vs > 0 && this.saldo && this.saldo - vs > 0) {
            this.saldo = vs;
            return true;
        }
        return false;
    }


}
