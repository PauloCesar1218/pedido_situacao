import ISituacao from './situacaoInterface';
interface IPedido {
    id?: number,
    descricao: string
    quantidade: number
    situacao: ISituacao
}

export default IPedido;