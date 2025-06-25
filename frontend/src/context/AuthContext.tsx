import { createContext, useContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { LoginFormData, RegisterFormData } from "../types/AuthInterface";
import { login as loginRequest, register as registerRequest } from "../service/Auth";

interface DecodedToken {
  id: number;
  nome: string;
  email: string;
  tipo: "admin" | "user";
  exp: number;
  iat: number;
}

interface AuthContextType {
  user: DecodedToken | null;
  isAuthenticated: boolean;
  login: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          localStorage.removeItem("jwtToken");
        }
      } catch {
        localStorage.removeItem("jwtToken");
      }
    }
  }, []);

  const login = async (data: LoginFormData) => {
    const response = await loginRequest(data);
    localStorage.setItem("jwtToken", response.token);
    const decoded: DecodedToken = jwtDecode(response.token);
    setUser(decoded);
  };

  const register = async (data: RegisterFormData) => {
    const response = await registerRequest(data);
    localStorage.setItem("jwtToken", response.token);
    const decoded: DecodedToken = jwtDecode(response.token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return context;
};
