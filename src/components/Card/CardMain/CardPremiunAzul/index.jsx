import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import styles from './CardPremiunAzul.module.scss';
import miniCard from './image/cardPremiunAzul/miniCard5.png'
import fundo from './image/cardPremiunAzul/armacaoCard5.png'
import faixa from './image/cardPremiunAzul/faixaCard4.png'

const CardPremiunAzul = ({nome,frase,imagem}) => {
  const tiltRef = useRef(null);

  const [favoritoOn, setFavoritoOn]= useState(true)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 5000,
        glare: false,
        reverse: false,
        "full-page-listening": false,
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
        <img className={styles.imgFundo} src={fundo} alt="" />
        <div className={`${styles.card_base} ${styles.card_personagem}`}>
          <img className={styles.card_personagem_imagem} src={imagem} alt="" />
        </div>

        <div className={`${styles.card_base} ${styles.card_faixa}`}>
          <div className={styles.nome_container}>
             <h2 className={styles.nome}>
                    {nome}
                  </h2>
            <img className={styles.faixaContainer} src={faixa} alt="" />
            
                 
              
           
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


export default CardPremiunAzul;
