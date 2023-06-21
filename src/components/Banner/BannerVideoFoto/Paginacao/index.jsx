import Bolinha from "../../Bolinhas"
import styles from "./Paginacao.module.scss"
import React from 'react'
import gema1 from "../../Bolinhas/image/gema1.png"
import gema2 from "../../Bolinhas/image/gema2.png"
import gema3 from "../../Bolinhas/image/gema3.png"

export default function Paginacao({ atual }) {
  return (
    <section className={styles.container}>
      <Bolinha atual={atual} imagem={gema1} numero={1} />
      <Bolinha atual={atual} imagem={gema2} numero={2} />
      <Bolinha atual={atual} imagem={gema3} numero={3} />
    </section>
  )
}
