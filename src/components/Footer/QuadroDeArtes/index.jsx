import styles from "./QuadroDeArtes.module.scss"

import React, { useRef } from 'react'

export default function QuadroDeArtes({ video, imagem }) {
  const videoRef = useRef(null);

  return (
    <section className={styles.container}>

      <video ref={videoRef} className={styles.container_primeiraCamada} autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Desculpe, seu navegador não suporta vídeos HTML5.
      </video>
      <img className={styles.container_segundaCamada} src={imagem} alt="" />
      
    </section>
  )
}
