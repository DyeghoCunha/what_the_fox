import styles from "./MiniCardDeck.module.scss"
import React, { useEffect, useState } from 'react'
import valor150 from "../image/150.png"
import botao1 from "../image/barra.png"
import favoritoOff from "../image/heartOff1.png"
import favoritoOn from "../image/heartOn1.png"




export default function MiniCardDeck({ card }) {
  const [favorito, setFavorito] = useState(false);

useEffect(()=>{
  card.favorito = favorito
},[favorito])


  function handleFavorito() {
 setFavorito(prev=> !prev)
 console.log(card)
  }

  return (
    <div className={styles.container_valor}>
      {!favorito && (
        <img onClick={handleFavorito} src={favoritoOff} className={styles.favorito} alt="" />
      )}
      {favorito && (
        <img onClick={handleFavorito} src={favoritoOn} className={styles.favorito} alt="" />
      )}
      <h1 className={styles.valor}>{card.valor}</h1>
      <img src={valor150} className={styles.fundo_valor} alt="" />
      <button className={styles.botao_container}>
        <h1 className={styles.botao_container_titulo}>Saiba Mais</h1>
        <img className={styles.botao_container_imagem} src={botao1} alt="" />
      </button>
    </div>
  )
}
