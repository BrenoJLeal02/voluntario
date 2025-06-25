import { useMemo } from "react";
import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
  sub: string; 
  email: string;
  username: string;
  exp: number;
  iat: number;
}

export function useAuthUser() {
  const token = localStorage.getItem("jwtToken");

  const decoded = useMemo<DecodedToken | null>(() => {
    if (!token) return null;

    try {
      const decodedToken = jwtDecode<DecodedToken>(token);

      // Verifica se o token expirou
      const isExpired = decodedToken.exp * 1000 < Date.now();
      if (isExpired) {
        console.warn("Token expirado.");
        return null;
      }

      return decodedToken;
    } catch (error) {
      console.error("Erro ao decodificar token:", error);
      return null;
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/"; 
  };

  return {
    userId: decoded?.sub ?? null,
    email: decoded?.email ?? null,
    username: decoded?.username ?? null,
    isAuthenticated: !!decoded,
    logout
  };
}
