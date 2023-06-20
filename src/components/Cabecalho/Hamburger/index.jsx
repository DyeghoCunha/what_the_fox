import styles from "./Hamburger.module.scss"
import hamburgerOn from "../image/menuHamgurgerOpen.png"
import hamburgerOff from "../image/menuHamgurgerClose.png"
import React, { useState } from 'react'
import { FaFortAwesome } from "react-icons/fa";
import BotaoMenu from "../../BotaoMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPercent, faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function Hamburger() {
const [aberto, setAberto] = useState(false)

function handleAberto(){
  setAberto(prev => !prev)
}


  return (

<nav className={styles.hamburger_container}>
<div className={styles.hamburger_container_icones}>
  <Link to={"/"}>
<BotaoMenu link={"/"}><FaFortAwesome/></BotaoMenu>
</Link>
  <Link to={"/novidades"}>
<BotaoMenu link={"/novidades"} ><FontAwesomeIcon icon={faNewspaper} /></BotaoMenu>
</Link>
  <Link to={"/promocoes"}>
<BotaoMenu link={"/promocoes"} ><FontAwesomeIcon icon={faPercent} /></BotaoMenu>
</Link>
  <Link to={"/osartistas"}>
<BotaoMenu link={"/osartistas"}><FontAwesomeIcon icon={faPersonCircleQuestion} /></BotaoMenu>
</Link>
</div>

    </nav>

  )
}
