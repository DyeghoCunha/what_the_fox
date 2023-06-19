import styles from './Cabecalho.module.scss'
import logo from "./image/logoWTF.png"

import React from 'react'
import CabecalhoLink from './CabecalhoLink'
import Busca from './Busca';
import Hamburger from './Hamburger';


export default function Cabecalho() {

  const handleBusca = (termoBusca) => {
    console.log('Termo de busca:', termoBusca);
  };



  return (
    <nav className={styles.cabecalho_container}>


<section className={styles.container_logo_e_links}>
      <img className={styles.logo} src={logo} alt="Logotipo da What The Fox" />


      <div className={` ${styles.display} ${styles.links_container}`}>
        <CabecalhoLink to={"/teste"}>
          <div>Home</div>
        </CabecalhoLink>

        <CabecalhoLink to={"/teste"}>
          <div>Nossas lojas</div>
        </CabecalhoLink>

        <CabecalhoLink to={"/teste"}>
          <div>Novidades</div>
        </CabecalhoLink>

        <CabecalhoLink to={"/teste"}>
          <div>Promoções</div>
        </CabecalhoLink>
      </div>
</section>
<Busca onBusca={handleBusca} className={styles.busca}/>
<Hamburger />
</nav>
  )
}
