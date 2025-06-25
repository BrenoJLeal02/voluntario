export interface LoginFormData {
  email: string;
  senha: string;
}

export interface RegisterFormData {
  nome: string;
  email: string;
  senha: string;
  tipo: 'admin' | 'user';
}
export interface LoginResponse{
  token: string;
} 