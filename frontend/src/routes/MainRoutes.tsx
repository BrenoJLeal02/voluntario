import { Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from '.';
import { PrivateRoute } from './PrivateRoute'; 

export function MainRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      {/* Rotas privadas */}
      <Route element={<PrivateRoute />}>
        <Route path="/homepage" element={<Home />} />
      </Route>
    </Routes>
  );
}
