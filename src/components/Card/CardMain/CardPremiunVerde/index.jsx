import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import styles from './CardPremiunVerde.module.scss';
import miniCard from '../CardPremiunVerde/image/cardPremiunVerde/miniCardPremiun2.png'
import fundo from '../CardPremiunVerde/image/cardPremiunVerde/armacaoCardPremiun2.png'
import faixa from '../CardPremiunVerde/image/cardPremiunVerde/faixaCardPremiun2.png'

const CardPremiunVerde = ({ nome, frase, imagem }) => {
  const tiltRef = useRef(null);

  const [favoritoOn, setFavoritoOn] = useState(true)

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
            <div className={styles.nomeSvg_container}>
              <svg fill="transparent" width="306" height="58" viewBox="10 0 306 30">
                <path id="curve" d="M11,16.5 A5.8,1.3 0 0 1 133,16.5" />
                <text width="306" className={styles.nome}>
                  <textPath xlinkHref="#curve" startOffset="46%" textAnchor="middle" >
                    {nome}
                  </textPath>
                </text>
              </svg>
            </div>
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

export default CardPremiunVerde;
