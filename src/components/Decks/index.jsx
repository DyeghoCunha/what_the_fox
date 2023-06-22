import React, { useState } from 'react'
import styles from './Deck.module.scss'
import { v4 as uuidv4 } from 'uuid';


import CardMain from '../Card/CardMain'
import MiniCardDeck from './miniCardDeck';


export default function Deck({ tribo, tipo , miniCard}) {

const randomId = uuidv4();

  return (
    <section className={styles.container}>

      {tribo.map((card) => (
        <div className={styles.card_container}>

          <CardMain key={card.id} type={tipo} imagem={card.imagem} nome={card.nome} frase={card.frase} />
           <MiniCardDeck key={randomId} card={card} miniCard={miniCard} />
      
        </div>
      ))}
    </section>
  )
}
