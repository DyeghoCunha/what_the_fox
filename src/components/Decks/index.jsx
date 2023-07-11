import React, { useState } from 'react'
import styles from './Deck.module.scss'
import { v4 as uuidv4 } from 'uuid';


import CardMain from '../Card/CardMain'
import MiniCardDeck from './miniCardDeck';


export default function Deck({ tribo, tipo, miniCard }) {



  return (
    <section className={styles.container}>

      {tribo.map((card) => (

        <div key={uuidv4()} className={styles.card_container}>
          <CardMain key={card.id} type={tipo} imagem={card.imagem} nome={card.nome} frase={card.frase} />
          <MiniCardDeck key={uuidv4()} card={card} miniCard={miniCard} />
        </div>
      ))}
    </section>
  )
}
