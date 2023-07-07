import React from 'react';


import styles from './CardVerde.module.scss';
import miniCard from './image/cardVerde/miniCard2.png'
import fundo from './image/cardVerde/armacaoCard2.png'
import faixa from './image/cardVerde/faixaCard2.png'
import CardBase3d from '../../CardBase3d';

const CardVerde = ({ nome, frase, imagem }) => {

  return (
<CardBase3d brilhoOn={false}>
    <article className={styles.container} >
      <img className={styles.imgFundo} src={fundo} alt="" />
      <section className={`${styles.card_base} ${styles.card_personagem}`}>
        <img className={styles.card_personagem_imagem} src={imagem} alt="" />
      </section>
      <section className={`${styles.card_base} ${styles.card_faixa}`}>
        <div className={styles.nome_container}>
          <img className={styles.faixaContainer} src={faixa} alt="" />
          <div className={styles.nomeSvg_container}>
            <svg fill="transparent" width="185" height="58" viewBox="10 0 135 30">
              <path id="curve" d="M11,16.5 A5.8,1.3 0 0 1 133,16.5" />
              <text width="185" className={styles.nome}>
                <textPath xlinkHref="#curve" startOffset="46%" textAnchor="middle">
                  {nome}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>
      <section className={` ${styles.miniCard_container}`}>
        <div>
          <img src={miniCard} className={styles.miniCard} />
        </div>
        <div>
          <p className={styles.frase}>{frase}</p>
        </div>
      </section>
    </article>
</CardBase3d>
  );
};


export default CardVerde;
