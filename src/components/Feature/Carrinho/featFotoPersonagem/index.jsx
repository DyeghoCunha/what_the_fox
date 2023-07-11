import CardEmote from "../../../Card/CardMain/CardEmote"
import styles from "./FotoPersonagemCarrinho.module.scss"
import ModalCardPersonagem from "../../ModalCardPersonagem"

import React from 'react'

export default function FotoPersonagemCarrinho({foto ,imagem}) {
  return (
  <>
        
        <section className={styles.container}>
          <div className={styles.container_foto}>
            <CardEmote card={foto}  imagem ={imagem}  emote={false} />
          </div>
        </section>
    </> 
  )
}
