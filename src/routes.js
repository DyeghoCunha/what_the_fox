
import PaginaInicial from './Paginas/PaginaInicial';
import PaginaTeste from './Paginas/PaginaTeste';
import { FavoritoProvider } from './common/context/Favoritos';
import Banner from './components/Banner';
import BannerPaginaInicial from './components/Banner/BannerPaginaInicial';
import BannerVideoFoto from './components/Banner/BannerVideoFoto';
import Cabecalho from './components/Cabecalho';
import {BannerProvider} from "./common/context/Banner"
import './styles/estilosGlobais.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <BannerProvider>
        <Banner />
      </BannerProvider>
      <FavoritoProvider>

        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/teste" element={<PaginaTeste />} />
        </Routes>
      </FavoritoProvider>
    </BrowserRouter>
  );
}
