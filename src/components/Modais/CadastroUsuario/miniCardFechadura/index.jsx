import styles from "./MiniCardFechadura.module.scss"
import React from 'react'
import imagemPersonagem from "./image/personagem1.png"
import imagemFechadura from "./image/fechadura.png"
import CardBase3d from "../../../Card/CardBase3d"

export default function MiniCardFechadura({opacidade=1}) {

  return (
    <CardBase3d reverse={true} segueMouse={true} inclinacao={20} velocidade={10}>

      <div className={styles.container}></div>
      <div className={styles.container_personagem}>
        <img src={imagemPersonagem} alt="" />
      </div>
      <div className={styles.container_fechadura}>
        <img src={imagemFechadura} style={{ opacity: opacidade }} alt="" />
      </div>

    </CardBase3d>
  )
}
