import CardEt from "../Card/CardMain/CardEt"
import styles from "./Destaque.module.scss"
import fotoEt from '../../components/Card/CardMain/CardEt/image/cardEt/Et.png'

import React from 'react'

export default function Destaques() {
  return (
    <section className={styles.container}>
      <div className={styles.titulo_container}>
        <h1 className={styles.titulo}>Destaque</h1>
      </div>


      <CardEt nome={"Xelton"} imagem={fotoEt} />
    </section>
  )
}
