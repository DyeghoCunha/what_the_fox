import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import styles from './CardEt.module.scss';
import miniCard from '../../../assets/images/cardEt/miniCardEt.png'
import fundo from '../../../assets/images/cardEt/armacaoCardEt.png'
import faixa from '../../../assets/images/cardEt/faixaEt.png'
import GemaOn from '../image/miniCard_Gema_On.png';
import GemaOff from '../image/miniCard_Gema_Off.png';
import discoDois from '../../../assets/images/cardEt/discoVoador2.png'
import discoDoisLuz from '../../../assets/images/cardEt/discoVoardor2Luz.png'
import vaca from '../../../assets/images/cardEt/discoVoardor2Vaca.png'
import bicicleta from '../../../assets/images/cardEt/discoVoardor2Bicicleta.png'
import humano from '../../../assets/images/cardEt/discoVoardor2Humano.png'

const CardEt = ({ nome, frase, imagem }) => {
  const tiltRef = useRef(null);

  const [favoritoOn, setFavoritoOn] = useState(true)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 35,
        speed: 50,
        glare: false,
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
        <div className={styles.container_disco}>
          <img className={styles.disco_um}  src={discoDois} alt="" />
          <img className={styles.disco_um_luz} src={discoDoisLuz}/>
          <img className={styles.disco_um_vaca} src={vaca}/>
           <img className={styles.disco_um_humano} src={humano}/>
          <img className={styles.disco_um_bicicleta} src={bicicleta}/> 
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
