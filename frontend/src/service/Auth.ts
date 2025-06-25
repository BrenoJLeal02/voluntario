import {LoginFormData, LoginResponse, RegisterFormData } from "../types/AuthInterface"
import { apiAuth } from "./api"

const baseURL = '/public'

const register = async (data: RegisterFormData): Promise<LoginResponse> => {
  const response = await apiAuth.post(`${baseURL}/usuarios.php`, data);
  return response.data;
};


const login = async (data: LoginFormData): Promise<LoginResponse> => {
    const response = await apiAuth.post(`${baseURL}/login.php`, data)
    return response.data
}

export {
    register,
    login
}