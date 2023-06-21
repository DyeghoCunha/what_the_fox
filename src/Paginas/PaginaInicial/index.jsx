import React from 'react'
import styles from './PaginaInicial.module.scss'
import Deck from '../../components/Decks'
import dados from '../../assets/json/dados.json'
export default function PaginaInicial() {

 const goblin = dados.Goblins; 


  return (
    <>
    <div className={styles.container}>
  <Deck tipo={"CardPremiunVerde"} tribo={goblin}/>
    </div>
    </>
  )
}
