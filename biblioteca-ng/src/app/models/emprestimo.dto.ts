import { LivroAutorResponse, LivroCategoriaResponse } from "./livro.dto";


export interface EmprestimoResponse {
    id: number | null;
    livroId: number | null;
    usuarioId: number | null;
    dataEmprestimo: Date | null;
    dataDevolucao: Date | null;
    status: string;
    livro: LivroResponse;
    categoria: CategoriaResponse;
    usuario: UsuarioResponse;
}

export interface EmprestimoCadastroRequest {
    livroId: number | null;
    usuarioId: number | null;
    dataEmprestimo: Date | null;
    dataDevolucao: Date | null;
    status: string;
}

export interface EmprestimoEditarRequest {
    livroId: number | null;
    usuarioId: number | null;
    dataEmprestimo: Date | null;
    dataDevolucao: Date | null;
    status: string;
}

export interface LivroResponse{
    titulo: string;
    autorId: number | null;
    categoriaId: number | null;
    anoPublicacao: Date | null;
    isbn: string;
    quantidade: number | null;
    descricao: string;
    resumo: string;
    autor: LivroAutorResponse;
    categoria: LivroCategoriaResponse;
}

export interface CategoriaResponse {
    id: number;
    nome: string;
}

export interface UsuarioResponse {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
  }