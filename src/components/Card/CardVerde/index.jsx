import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import styles from './CardVerde.module.scss';
import miniCard from '../../../assets/images/card2/miniCard2.png'
import GemaOn from '../image/miniCard_Gema_On.png';
import GemaOff from '../image/miniCard_Gema_Off.png';

const CardVerde = ({nome,frase,imagem}) => {
  const tiltRef = useRef(null);

  const [favoritoOn, setFavoritoOn]= useState(true)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 35,
        speed: 50,
        glare: true,
        'max-glare': 1.5
      });
    }
  }, []);

  function handleClick() {
    setFavoritoOn(prev => !prev)
  }

 
  return (

    <>


      <div className={`${styles.container_Card} tilt`} ref={tiltRef}>

        <div className={`${styles.card_base} ${styles.card_personagem}`}>
          <img className={styles.card_personagem_imagem} src={imagem} alt="" />
        </div>

        <div className={`${styles.card_base} ${styles.card_faixa}`}>
          <div className={styles.nome_container}>
            <svg fill="transparent" width="125" height="35" viewBox="0 0 135 20">
              <path id="curve" d="M10,13.5 A10.5,1.5 0 0 1 135,13.5" />
              <text width="135">
                <textPath xlinkHref="#curve" className={styles.nome}>
                 {nome}
                </textPath>
              </text>
            </svg>
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
            <p className={styles.frase}>{frase}</p>
          </div>



        </div>

      </div>

    </>

  );
};

export default CardVerde;
