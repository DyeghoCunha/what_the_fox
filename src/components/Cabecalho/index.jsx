import styles from './Cabecalho.module.scss'
import logo from "./image/logoWTF.png"

import React, { useContext, useState } from 'react'
import CabecalhoLink from './CabecalhoLink'
import Busca from './Busca';
import Hamburger from './Hamburger';
import BotaoGeral from '../BotãoGeral';
import ModalCadastroUsuario from '../Modais/CadastroUsuario';
import ModalLoginUsuario from '../Modais/LoginUsuario';
import { FirebaseContext } from '../../common/context/FirebaseConfig';
import ModalLoginFirebase from '../Modais/ModalLoginFirebase';
import BotaoMenu from '../BotaoMenu';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faHeart, faX, faXmark } from '@fortawesome/free-solid-svg-icons';
import BotaoNeomorph from '../BotaoNeomorph';
import FavoritosCarrinho from './FavoritosCarrinho';


export default function Cabecalho() {
  const { handleLogOut } = useContext(FirebaseContext)
  const [modalLogar, setModalLogar] = useState(false)
  const [modalRegistrar, setModalRegistrar] = useState(false)
  const logado = localStorage.getItem('Logado');

  const [menuHamburger, setMenuHamburger] = useState(false)

  const handleMenuHamburger = () => {
    setMenuHamburger(prev => !prev)
  }

  const handleBusca = (termoBusca) => {
    console.log('Termo de busca:', termoBusca);
  };

  function handleClickLogar() {
    setModalLogar(prev => !prev)
  }

  function handleClickRegistrar() {
    setModalRegistrar(prev => !prev)
    console.log(modalRegistrar)
  }
  if (logado) {
    console.log("Cabecalho:Logado")
  }

  return (
    <nav className={styles.cabecalho_container}>

      <section className={styles.container_logo_e_links}>
        <img className={styles.logo} src={logo} alt="Logotipo da What The Fox" />

        <div className={` ${styles.display} ${styles.links_container}`}>

          <CabecalhoLink to={"/"}>
            <div>Home</div>
          </CabecalhoLink>

          <CabecalhoLink to={"/artistas"}>
            <div>Os Artistas</div>
          </CabecalhoLink>

          <CabecalhoLink to={"/novidades"}>
            <div>Novidades</div>
          </CabecalhoLink>

          <CabecalhoLink to={"/promocoes"}>
            <div>Promoções</div>
          </CabecalhoLink>

        </div>

       <FavoritosCarrinho/>

        <div className={`${styles.logar} ${styles.aparece}`} onClick={handleMenuHamburger}>

          {!menuHamburger && (
            <BotaoMenu><FontAwesomeIcon icon={faBars} /></BotaoMenu>
          )}
          {menuHamburger && (
            <BotaoMenu ><FontAwesomeIcon icon={faX} /></BotaoMenu>
          )}

        </div>

        {logado && (
          <div className={`${styles.logar} ${styles.esconde}`} onClick={handleLogOut}>
            <BotaoGeral texto={"LogOut"} />
          </div>
        )}
        {!logado && (
          <div className={`${styles.logar} ${styles.esconde}`} onClick={handleClickLogar}>
            <BotaoGeral texto={"Login"} />
          </div>
        )}
        {modalLogar && (
          <ModalLoginFirebase aoFechar={setModalLogar} />
        )}

      </section>

      <div className={styles.esconde}>
        <Busca onBusca={handleBusca} className={styles.busca} />
      </div>


      <Hamburger aberto={menuHamburger} modalLogin={setModalLogar} />
    </nav>
  )
}
