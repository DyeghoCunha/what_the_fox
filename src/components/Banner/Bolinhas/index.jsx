import React, { useEffect, useRef, useState } from 'react'
import gema1 from "./image/gema1.png"
import gema2 from "./image/gema2.png"
import gema3 from "./image/gema3.png"
import styles from "./Bolinha.module.scss"
import VanillaTilt from 'vanilla-tilt';




export default function Bolinha({ imagem, atual, numero }) {



  const tiltRef = useRef(null);


  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 35,
        speed: 500,
        glare: true,
        reverse: true,
        "full-page-listening": true,
        'max-glare': 1.5
      });
    }
  }, []);


  return (
    <section className={`${styles.container} tilt`} ref={tiltRef}>
      <div className={styles.bolinha_container}>
        {atual === numero && (
          <img className={`${styles.imagem} `} src={imagem} alt="" />
        )}

      </div>
    </section>

  )
}
