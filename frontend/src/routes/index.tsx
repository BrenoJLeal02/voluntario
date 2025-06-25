import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";



export function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}
export function Register() {
  return (
    <>
      <RegisterPage />
    </>
  );
}

export function Home(){
  return(
    <>
      <HomePage/>
    </>
  )
}

