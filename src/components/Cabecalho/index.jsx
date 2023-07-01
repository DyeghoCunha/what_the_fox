import styles from './Cabecalho.module.scss'
import logo from "./image/logoWTF.png"

import React, { useState } from 'react'
import CabecalhoLink from './CabecalhoLink'
import Busca from './Busca';
import Hamburger from './Hamburger';
import BotaoGeral from '../BotãoGeral';
import AbModal from '../Modais/Modal';
import ModalCadastroUsuario from '../Modais/CadastroUsuario';


export default function Cabecalho() {

  const [modalLogar, setModalLogar] = useState(false)
  const [modalRegistrar, setModalRegistral] = useState(false)


  const handleBusca = (termoBusca) => {
    console.log('Termo de busca:', termoBusca);
  };

  function handleClickLogar() {
    setModalLogar(prev => !prev)
  }
  function handleClickRegistrar() {
    setModalRegistral(prev => !prev)
  }

  return (
    <nav className={styles.cabecalho_container}>


      <section className={styles.container_logo_e_links}>
        <img className={styles.logo} src={logo} alt="Logotipo da What The Fox" />


        <div className={` ${styles.display} ${styles.links_container}`}>

          <CabecalhoLink to={"/teste"}>
            <div>Home</div>
          </CabecalhoLink>

          <CabecalhoLink to={"/teste"}>
            <div>Os Artistas</div>
          </CabecalhoLink>

          <CabecalhoLink to={"/teste"}>
            <div>Novidades</div>
          </CabecalhoLink>

          <CabecalhoLink to={"/teste"}>
            <div>Promoções</div>
          </CabecalhoLink>

        </div>

        <div className={styles.logar} onClick={handleClickLogar}>
          <BotaoGeral texto={"Logar"} />
        </div>

      
        <ModalCadastroUsuario aberta={true} titulo={"Teste"}/>
        


      </section>

      <div className={styles.esconde}>
        <Busca onBusca={handleBusca} className={styles.busca} />

      </div>


      <Hamburger />
    </nav>
  )
}
