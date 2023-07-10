import React, { useContext } from 'react';

import styles from "./Produtos.module.scss"

import Divisoria from '../../components/Decks/Divisoria';
import Deck from '../../components/Decks';
import { FavoritoContext } from '../../common/context/Favoritos';

import ModalCard from '../../components/Modais/Modal/ModalCard';
import DeckEmotes from '../Decks/DeckEmote';
import ModalCardPersonagem from '../Feature/ModalCardPersonagem';



export default function Produtos({ id, titulo, tribo, miniCard, estiloCard, emotes = false }) {

  const { aberto, cardModal } = useContext(FavoritoContext)

 // console.log("CardModal: ", cardModal)


  return (

    <>

      <article id={id} className={styles.container}>
        <ModalCardPersonagem card={cardModal} />
        <div className={styles.container_titulo}>
          <Divisoria  titulo={titulo} />
        </div>

        {emotes && (
          <div className={styles.container_deck}>
            <DeckEmotes tribo={tribo} />
          </div>

        )}
        {!emotes && (
          <div className={styles.container_deck}>
            <Deck tipo={estiloCard} tribo={tribo} miniCard={miniCard} />
          </div>
        )}
      </article>

    </>

  )

}



