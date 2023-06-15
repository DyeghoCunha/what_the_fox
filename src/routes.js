
import PaginaInicial from './Paginas/PaginaInicial';
import { FavoritoProvider } from './common/context/Favoritos';
import './styles/estilosGlobais.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritoProvider>

        <Routes>
          <Route path="/" element={<PaginaInicial />} />
        </Routes>
      </FavoritoProvider>
    </BrowserRouter>
  );
}
