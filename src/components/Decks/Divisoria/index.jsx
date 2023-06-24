import styles from "./Divisoria.module.scss"
import esquerda from "./image/barraEsquerda.png"
import direita from "./image/barraDireita.png"
import meio from "./image/barraMeio.png"

import React from 'react'

export default function Divisoria({ titulo }) {
  return (
    <>
      <section className={styles.container}>
        <img src={esquerda} className={styles.container_imagem} alt="" />
        <img src={meio} className={styles.container_imagem} alt="" />
        <img src={direita} className={styles.container_imagem} alt="" />
        <h2 className={styles.titulo}>{titulo}</h2>
      </section>

    </>
  )
}
