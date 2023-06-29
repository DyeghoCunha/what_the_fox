import styles from "./MiniCardDeck.module.scss"
import React, { useCallback, useContext, useEffect, useState } from 'react'

import valor10 from "../image/10.png"
import valor150 from "../image/150.png"
import valor50 from "../image/50.png"
import ModalCard from "../../Modais/Modal/ModalCard"
import { FavoritoContext } from "../../../common/context/Favoritos"




export default function MiniCardDeck({ card, miniCard }) {
  const [favorito, setFavorito] = useState(false);

  const {  setAberto, setCardModal } = useContext(FavoritoContext)


  let moedas = 0;
  const parametro = Number(card.valor)


  if (parametro >= 100) {
    moedas = valor150;
  } else if (parametro < 100 && parametro > 50) {
    moedas = valor50;
  } else {
    moedas = valor10;
  }


  useEffect(() => {
    card.favorito = favorito
  }, [favorito])


  function handleFavorito() {
    setFavorito(prev => !prev)
    console.log(card)
  }
  function handleClick() {
    setAberto(prev => !prev)
    setCardModal(card)
  
  }


  return (
    <>
      <div className={styles.container_valor}>
        {!favorito && (
          <img onClick={handleFavorito} src={miniCard.favoritoOff} className={styles.favorito} alt="" />
        )}
        {favorito && (
          <img onClick={handleFavorito} src={miniCard.favoritoOn} className={styles.favorito} alt="" />
        )}
        <h1 className={styles.valor}>{card.valor}</h1>
        <img src={moedas} alt="" className={styles.moedas} />
        <img src={miniCard.minicard} className={styles.fundo_valor} alt="" />

        <button className={styles.botao_container}>
          <h1 className={styles.botao_container_titulo} onClick={handleClick}>Saiba Mais</h1>
          <img className={styles.botao_container_imagem} src={miniCard.botao} alt="" />
        </button>
      </div>
    </>

  )
}
