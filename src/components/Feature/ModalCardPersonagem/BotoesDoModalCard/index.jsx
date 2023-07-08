import { faCartPlus, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons"
import BotaoNeomorph from "../../../BotaoNeomorph"
import styles from "./BotoesDoModalCard.module.scss"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BotoesDoModalCard({ parametro, onClick }) {
  return (
    <section className={styles.container}>
      <div className={styles.container_botoes}>
        <BotaoNeomorph onClick={onClick} botaoModal={true} parametro={parametro}><FontAwesomeIcon icon={faHeartCirclePlus} /></BotaoNeomorph>
        <BotaoNeomorph onClick={onClick} botaoModal={true} parametro={parametro}><FontAwesomeIcon icon={faCartPlus} /></BotaoNeomorph>
      </div>

    </section>
  )
}
