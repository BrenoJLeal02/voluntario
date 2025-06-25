export interface LoginFormData {
  email?: string;
  username?: string;
  password: string;
}

export interface RegisterFormData {
  nome: string;
  email: string;
  senha: string;
  tipo: 'admin' | 'user';
}
