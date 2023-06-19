import styles from "./Hamburger.module.scss"
import hamburgerOn from "../image/menuHamgurgerOpen.png"
import hamburgerOff from "../image/menuHamgurgerClose.png"
import React, { useState } from 'react'

export default function Hamburger() {
const [aberto, setAberto] = useState(false)

function handleAberto(){
  setAberto(prev => !prev)
}


  return (

    <section onClick={handleAberto} className={styles.hamburger_container}>
     {aberto &&(
      <img className={styles.hamburgerOn} src={hamburgerOff} alt="Hamburger fecha"/>
     )} 
      {!aberto &&(
      <img className={styles.hamburgerOff} src={hamburgerOn} alt="Hamburger Aberto"/>
     )} 
    
    </section>
   
  )
}
