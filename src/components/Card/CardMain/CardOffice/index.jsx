import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import styles from './CardOffice.module.scss';
import miniCard from './image/miniCArd6.png'
import fundo from './image/armacaoCard6.png'
import quadro from './image/quadro.png'


const CardOffice = ({ nome, frase, imagem }) => {
  const tiltRef = useRef(null);



  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 5000,
        glare: false,
        reverse: false,
        "full-page-listening": false,
        'max-glare': 1.5
      });
    }
  }, []);





  return (

    <>

      <div className={`${styles.container_Card} tilt`} ref={tiltRef}>
        <img className={styles.imgFundo} src={fundo} alt="" />
        <div className={`${styles.card_base} ${styles.card_personagem}`}>
          <img className={styles.card_personagem_imagem} src={imagem} alt="" />
        </div>
        <div className={`${styles.card_base} ${styles.card_faixa}`}>
          <div className={styles.nome_container}>

            <div className={styles.faixaContainer}>
          
            </div>
          </div>
        </div>

<div className={styles.nomeSvg_container}>
              <h2 className={styles.nome}>
                {nome}
              </h2>
            </div>

 <img className={styles.quadro} src={quadro} alt="" />
        <div className={` ${styles.miniCard_container}`}>

          <div >
            <img src={miniCard} className={styles.miniCard} />
          </div>

        </div>

      </div>

    </>

  );
};

export default CardOffice;
