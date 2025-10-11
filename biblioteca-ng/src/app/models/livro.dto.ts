export interface LivroCadastroRequest{
    titulo: string;
    autorId: number | null;
    categoriaId: number | null;
    anoPublicacao: number | null;
    isbn: string;
    descricao: string;
    resumo: string;
}