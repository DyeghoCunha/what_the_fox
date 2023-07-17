import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BotaoGeral from "../../../../BotãoGeral"
import styles from "./ValoresMiniCard.module.scss"
import React from 'react'
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"

export default function ValoresMiniCard({ imagem, titulo, onClick }) {
  return (
    <section className={styles.container}>
      <div className={styles.container_valores}>
        <h2 className={styles.container_valores_titulo}>{titulo}</h2>
        <div className={styles.container_valores_valor}>
          <div className={styles.container_valores_valor_imagem}>
            <img src={imagem} alt="" />
          </div>
          <div className={styles.container_valores_valor_icone}>
            <BotaoGeral onClick={onClick} icone={<FontAwesomeIcon icon={faDollarSign} />} />
          </div>
        </div>
      </div>
    </section>
  )
}
