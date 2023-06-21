import React from 'react'
import styles from './PaginaInicial.module.scss'
import Deck from '../../components/Decks'
import dados from '../../assets/json/dados.json'
import Categorias from '../../components/Categorias';
export default function PaginaInicial() {

  const goblin = dados.Goblins;


  return (
    <>


      <div className={styles.container}>
        <Categorias />
        <Deck tipo={"CardPremiunVerde"} tribo={goblin} />
      </div>
    </>
  )
}
