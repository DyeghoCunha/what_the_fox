import React from 'react'
import styles from './Deck.module.scss'

import CardMain from '../Card/CardMain'

export default function Deck({tribo,tipo}) {




  return (
    <section className={styles.container}>
      
{tribo.map((card)=>(
  <div className={styles.card_container}>
    <CardMain key={card.id} type={tipo} imagem={card.imagem} nome={card.nome} frase={card.frase}/>
  </div>
))}
    </section>
  )
}
