import React from 'react'
import styles from "./ItemDoCarrinho.module.scss"
import CardValor from '../../ModalCardPersonagem/CardValor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import FotoPersonagemCarrinho from "../featFotoPersonagem"


export default function ItemDoCarrinho({card,onClick}) {
  return (
    <section className={styles.base}>
    <FotoPersonagemCarrinho foto={card} />
    <div>
      <div className={styles.container}>
        <div className={styles.container_foto}>
          <CardValor valor={card.valor} />
        </div>
      </div>
      <button onClick={onClick} className={styles.container_botao}><FontAwesomeIcon icon={faXmark} /></button>
    </div>
  </section>


  )
}
