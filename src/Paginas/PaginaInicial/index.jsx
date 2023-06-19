import React from 'react'
import BannerPaginaInicial from '../../components/Banner/BannerPaginaInicial'
import styles from './PaginaInicial.module.scss'
import Deck from '../../components/Decks'
import dados from '../../assets/json/dados.json'

export default function PaginaInicial() {

 const goblin = dados.goblins; 




  return (
    <div className={styles.container}>

   
    <Deck tipo={"CardPremiunAzul"} tribo={goblin}/>
 
    </div>
  )
}
