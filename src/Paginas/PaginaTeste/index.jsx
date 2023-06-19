import React from 'react'
import styles from './PaginaInicial.module.scss'
import Deck from '../../components/Decks'
import dados from '../../assets/json/dados.json'
import CardEt from '../../components/Card/CardMain/CardEt';
import fotoEt from '../../components/Card/CardMain/CardEt/image/cardEt/Et.png'


export default function PaginaTeste() {

 const goblin = dados.goblins; 




  return (
    <div className={styles.container}>

  <CardEt nome={'Alienigena'} imagem={fotoEt}/>



    </div>
  )
}
