export interface LoginFormData {
  email?: string;
  username?: string;
  password: string;
}

export interface RegisterFormData {
  name: string; 
  email: string;
  username: string;
  password: string;
  role: "ADMIN" | "USER";
}
