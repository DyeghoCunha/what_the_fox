import styles from "./Hamburger.module.scss"
import hamburgerOn from "../image/menuHamgurgerOpen.png"
import hamburgerOff from "../image/menuHamgurgerClose.png"
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import BotaoMenu from "../../BotaoMenu";

export default function Hamburger() {
const [aberto, setAberto] = useState(false)

function handleAberto(){
  setAberto(prev => !prev)
}


  return (


    <nav className={styles.hamburger_container}>
<div className={styles.hamburger_container_icones}>
<BotaoMenu />
<BotaoMenu />
<BotaoMenu />
<BotaoMenu />
 
</div>
    </nav>

/*     <section onClick={handleAberto} className={styles.hamburger_container}>
     {aberto &&(
      <img className={styles.hamburgerOn} src={hamburgerOff} alt="Hamburger fecha"/>
     )} 
      {!aberto &&(
      <img className={styles.hamburgerOff} src={hamburgerOn} alt="Hamburger Aberto"/>
     )} 
    
    </section> */
  
  )
}
