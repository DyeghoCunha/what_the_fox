import { faCartPlus, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons"
import BotaoNeomorph from "../../../BotaoNeomorph"
import styles from "./BotoesDoModalCard.module.scss"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BotoesDoModalCard({ parametro, onClickIcone1, onClickIcone2, icone1, icone2 }) {




  return (
    <section className={styles.container}>
      <div className={styles.container_botoes}>
        <BotaoNeomorph onClick={onClickIcone1} botaoModal={true} parametro={parametro}>{icone1}</BotaoNeomorph>
        <BotaoNeomorph onClick={onClickIcone2} botaoModal={true} parametro={parametro}>{icone2}</BotaoNeomorph>
      </div>

    </section>
  )
}
