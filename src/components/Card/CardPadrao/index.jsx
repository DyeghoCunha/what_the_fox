import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import imagem from '../image/CardTeste.png';
import styles from './CardPadrao.module.scss';
import miniCard from '../image/miniCard.png'
import { Textfit } from 'react-textfit';

const Card = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 50,
        glare: true,
        'max-glare': 0.5
      });
    }
  }, []);

  return (

    <>


      <div className={`${styles.container_Card} tilt`} ref={tiltRef}>

        <div className={`${styles.card_base} ${styles.card_personagem}`}>
          <img className={styles.card_personagem_imagem} src={imagem} alt="" />
        </div>

        <div className={`${styles.card_base} ${styles.card_faixa}`}>
          <div className={styles.nome_container}>
          <svg  fill="transparent"  width="125" height="35" viewBox="0 0 135 15">
            <path id="curve" d="M3,13.5 A10.5,1.5 0 0 1 135,13.5" />
            <text width="135">
              <textPath xlinkHref="#curve" className={styles.nome}>
                Comedor de Bunda
              </textPath>
            </text>
          </svg>
          </div>
        </div>

        <div className={` ${styles.miniCard_container}`}>
          <div >
            <img src={miniCard} className={styles.miniCard} />
          </div>

          <div >
            <p className={styles.frase}>Matador de Elfos e Gnomos </p>
          </div>



        </div>

      </div>










    </>

  );
};

export default Card;
