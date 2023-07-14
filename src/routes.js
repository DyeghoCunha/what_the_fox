
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
import { ModalCardProvider } from './common/context/ModalCard';
import { CarrinhoProvider } from './common/context/Carrinho';
import PaginaCarrinho from './Paginas/PaginaCarrinho';
import { BuscaProvider } from './common/context/Busca';
import PaginaFavoritos from './Paginas/PaginaFavoritos';



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <FirebaseProvider>
        <BuscaProvider>
          <ModalCardProvider>
            <CarrinhoProvider>
              <FavoritoProvider>
              <Cabecalho />

              {/*   <BannerProvider>
                  <Banner />
                </BannerProvider>  */}



                <Routes>
                  <Route path="/teste" element={<PaginaInicial />} />
                  <Route path="/carrinho" element={<PaginaCarrinho />} />
                  <Route path="/" element={<PaginaTeste />} />
                  <Route path="/favorito" element={<PaginaFavoritos/>} />
                </Routes>

              {/*   <Footer id="Artistas#1" />
 */}
              </FavoritoProvider>
            </CarrinhoProvider>
          </ModalCardProvider>
        </BuscaProvider>
      </FirebaseProvider>
    </BrowserRouter>
  );
}
