import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import styles from "./ContatoArtista.module.scss"

import React from 'react'

export default function ContatoArtista({logo, linkInsta, linkLikDin, linkWapp}) {
  return (
<div className={styles.container}>

       <img className={styles.container_logo} src={logo} alt="" />

       <div className={styles.container_contato}>
         
           <a href={linkInsta} target="_blank"><BsInstagram className={styles.container_contato_icone} /></a>
           <a href={linkLikDin} target="_blank"><BsLinkedin className={styles.container_contato_icone} /></a>
           <a href={linkWapp} target="_blank"><BsWhatsapp className={styles.container_contato_icone} /></a>
        
       </div>

   </div>
  )
}
