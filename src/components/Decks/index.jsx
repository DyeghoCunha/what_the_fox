import React from 'react'
import styles from './DeckVerde.module.scss'


import imagem1 from '../../assets/images/personagem/samurai/samurai1.png'


import CardMain from '../Card/CardMain'
import CardVerde from '../Card/CardMain/CardVerde'

export default function DeckVerde({tribo}) {




  return (
    <section className={styles.container}>
{tribo.map((card)=>(
    <CardVerde key={card.id} imagem={card.imagem} nome={card.nome} frase={card.frase}/>
))}
    </section>
  )
}
