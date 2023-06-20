import React from 'react'
import styles from './PaginaInicial.module.scss'
import Deck from '../../components/Decks'
import dados from '../../assets/json/dados.json'
import CardEt from '../../components/Card/CardMain/CardEt';
import fotoEt from '../../components/Card/CardMain/CardEt/image/cardEt/Et.png'
import Cabecalho from '../../components/Cabecalho';
export default function PaginaInicial() {

 const goblin = dados.goblins; 




  return (
    <>
 
    <div className={styles.container}>


  <Deck tipo={"CardPremiunVerde"} tribo={goblin}/>
 
    </div>
    </>
  )
}
