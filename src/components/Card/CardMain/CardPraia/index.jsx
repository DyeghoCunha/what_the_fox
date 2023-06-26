import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import styles from './CardPraia.module.scss';
import miniCard from './image/miniCard5.png'

import fundo from './image/armacaoCard5.png'
import gaivota from './image/gaivota.png'
import sol from "./image/sol.png"


const CardPraia = ({ nome, imagem }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 35,
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
              <img className={styles.gaivota} src={gaivota} alt="" />
            </div>
          </div>
        </div>

<div className={styles.nomeSvg_container}>
              <h2 className={styles.nome}>
                {nome}
              </h2>
            </div>

 <img className={styles.sol} src={sol} alt="" />
        <div className={` ${styles.miniCard_container}`}>

          <div >
            <img src={miniCard} className={styles.miniCard} />
          </div>

        </div>

      </div>

    </>

  );
};

export default CardPraia;
