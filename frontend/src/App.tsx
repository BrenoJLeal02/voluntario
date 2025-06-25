import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";

// Este é o arquivo de entrada da nossa aplicação. Ele é responsável por renderizar as páginas com base nas rotas definidas.
// O <Router> funciona como um envelope para todas as rotas que criamos no arquivo MainRoutes.tsx,
// garantindo que, ao acessarmos a rota "/", a LoginPage.tsx seja carregada como página inicial.
// Se clicarmos em um <Link> que leve, por exemplo, à rota "/registro", a página de registro será automaticamente exibida.
function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default App;
