interface IConta {
    id?: number,
    nomeTitular?: string | undefined
    numeroConta?: number | undefined
    saldo?: number | undefined;
    getId(): number | undefined;
    setId(_id: number): void;
    getnomeTitular(): string | undefined;
    setnomeTitular(_nomeTitular: string): void;
    getnumeroConta(): number | undefined;
    setnumeroConta(_numeroConta: number): void;
    getsaldo(): number | undefined;
    setsaldo(_saldo: number):void;
    deposito(vd: number): boolean;
    saque(vs: number):boolean;
}

export default IConta;