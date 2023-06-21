import styles from "./CardCategoria.module.scss"
import armacao from "../image/categoriaCard_armacao.png"
import faixa from "../image/categoriaCard_Faixa.png"
import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react'


export default function CardCategoria({ nome, imagem  }) {

  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 35,
        speed: 500,
        glare: true,
        reverse: false,
        "full-page-listening": false,
        'max-glare': 1.5
      });
    }
  }, []);

  return (

    <>
      <div className={`${styles.container_Card} tilt`} ref={tiltRef}>
        <img className={styles.imgFundo} src={armacao} alt="" />
        <div className={`${styles.card_base} ${styles.card_personagem}`}>
          <img className={styles.card_personagem_imagem} src={imagem} alt="" />
        </div>
        <div className={`${styles.card_base} ${styles.card_faixa}`}>
          <div className={styles.nome_container}>
            <img className={styles.faixaContainer} src={faixa} alt="" />
            
              <h3 className={styles.nome}>
                {nome}
              </h3>
          
          </div>
        </div>
      </div>
    </>
  );
};


