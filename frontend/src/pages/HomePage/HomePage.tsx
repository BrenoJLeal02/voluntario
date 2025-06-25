import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function HomePage(){

    const {user, isAuthenticated, logout} = useAuth();
    return (
  <>
    {isAuthenticated && <p>Bem-vindo, {user?.nome}!</p>}
    <button onClick={logout}><Link to={'/'}>Sair</Link></button>
  </>
    );
} 