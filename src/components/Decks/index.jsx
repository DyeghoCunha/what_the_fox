import React, { useState } from 'react'
import styles from './Deck.module.scss'
import valor10 from "./image/10.png"
import valor50 from "./image/50.png"
import valor150 from "./image/150.png"
import botao1 from "./image/barra.png"
import CardMain from '../Card/CardMain'
import favoritoOff from "./image/heartOff1.png"
import favoritoOn from "./image/heartOn1.png"

export default function Deck({ tribo, tipo }) {

  const [favorito, setFavorito] = useState(false);

  function handleFavorito() {
    setFavorito(prev => !prev)
  }

  return (
    <section className={styles.container}>

      {tribo.map((card) => (
        <div className={styles.card_container}>
          <CardMain key={card.id} type={tipo} imagem={card.imagem} nome={card.nome} frase={card.frase} />
          <div className={styles.container_valor}>
            {!favorito && (
              <img onClick={handleFavorito} src={favoritoOff} className={styles.favorito} alt="" />
            )}
            {favorito && (
              <img onClick={handleFavorito} src={favoritoOn} className={styles.favorito} alt="" />
            )}
            <h1 className={styles.valor}>150</h1>
            <img src={valor150} className={styles.fundo_valor} alt="" />
            <button className={styles.botao_container}>
              <h1 className={styles.botao_container_titulo}>Saiba Mais</h1>
              <img className={styles.botao_container_imagem} src={botao1} alt="" />
            </button>

          </div>
        </div>
      ))}
    </section>
  )
}
