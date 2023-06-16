import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import styles from './CardEt.module.scss';
import miniCard from '../../../assets/images/cardEt/miniCardEt.png'
import fundo from '../../../assets/images/cardEt/armacaoCardEt.png'
import faixa from '../../../assets/images/cardEt/faixaEt.png'
import GemaOn from '../image/miniCard_Gema_On.png';
import GemaOff from '../image/miniCard_Gema_Off.png';

const CardEt = ({nome,frase,imagem}) => {
  const tiltRef = useRef(null);

  const [favoritoOn, setFavoritoOn]= useState(true)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 35,
        speed: 50,
        glare: true,
        'max-glare': 0.5
      });
    }
  }, []);

  function handleClick() {
    setFavoritoOn(prev => !prev)
  }

 
  return (

    <>


      <div className={`${styles.container_Card} tilt`} ref={tiltRef}>
<img className={styles.imgFundo} src={fundo} alt="" />
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

        <div className={` ${styles.miniCard_container}`}>
          <div >
            <img src={miniCard} className={styles.miniCard} />
          </div>

      {/*     <div className={styles.favorito}>

            {favoritoOn && (
              <img className={styles.gema} onClick={handleClick} src={GemaOn} />
            )}
              {!favoritoOn && (
              <img className={styles.gema} onClick={handleClick} src={GemaOff} />
            )}

          </div> */}
          <div >
            <p className={styles.frase}>{nome}</p>
          </div>



        </div>

      </div>

    </>

  );
};

export default CardEt;
