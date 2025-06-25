import {RegisterFormData } from "../types/AuthInterface"
import { apiAuth } from "./api"

const baseURL = '/public'

const register = async (data: RegisterFormData) => {
    const response = await apiAuth.post(`${baseURL}/usuarios.php`, data)
    return response
}


export {
    register,
}