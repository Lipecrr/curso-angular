export interface UsuarioResponse {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

export interface UsuarioCadastroRequest {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

export interface UsuarioEditarRequest {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}