import CardBase3d from "../../CardBase3d"
import styles from "./CardEmote.module.scss"
import imagem from "../../../../assets/images/personagem/emotes/emote1.png"
import foxCoin15 from "./image/FoxCoin15.png"
import foxCoin10 from "./image/FoxCoin10.png"
import foxCoin5 from "./image/FoxCoin5.png"


import React from 'react'

export default function CardEmote({ card }) {

  let moeda = ""
  
  const preco = card.valor


  if (preco > 10) {
    moeda = foxCoin15
  } else if (preco >= 10 && preco > 5) {
    moeda = foxCoin10
  } else {
    moeda = foxCoin5
  }

  return (
    <CardBase3d >
      <section className={styles.container}>
        <div className={styles.container_imagem}>
          <img src={card.imagem} className={styles.imagem} alt="" />
        </div>
      </section>

      <div className={styles.container_valor}>
        <img src={moeda} className={styles.valor} />
      </div>

      <div className={styles.container_nome}>
        <h2 className={styles.nome}>{card.nome}</h2>
      </div>
    </CardBase3d >
  )
}
