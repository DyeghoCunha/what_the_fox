
import PaginaInicial from './Paginas/PaginaInicial';
import PaginaTeste from './Paginas/PaginaTeste';
import { FavoritoProvider } from './common/context/Favoritos';
import Banner from './components/Banner';
import BannerPaginaInicial from './components/Banner/BannerPaginaInicial';
import BannerVideoFoto from './components/Banner/BannerVideoFoto';
import Cabecalho from './components/Cabecalho';
import { BannerProvider } from "./common/context/Banner"
import './styles/estilosGlobais.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { FirebaseProvider } from './common/context/FirebaseConfig';



export default function AppRoutes() {
  return (
    <BrowserRouter>
<FirebaseProvider>
     {/* <BannerProvider>
        <Banner />
      </BannerProvider>
 */}
      <FavoritoProvider>

        <Routes>
          <Route path="/teste" element={<PaginaInicial />} />
          <Route path="/" element={<PaginaTeste />} />
        </Routes>


    {/*   <Footer />  */}

      </FavoritoProvider>
</FirebaseProvider>      
    </BrowserRouter>
  );
}
