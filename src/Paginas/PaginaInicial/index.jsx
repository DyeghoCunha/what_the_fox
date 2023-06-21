import React from 'react'
import styles from './PaginaInicial.module.scss'
import Deck from '../../components/Decks'
import dados from '../../assets/json/dados.json'
import Categorias from '../../components/Categorias';
import Destaques from '../../components/Destaque';
export default function PaginaInicial() {

  const goblin = dados.Goblins;


  return (
    <>


      <div className={styles.container}>
        <Categorias />
        <Destaques/>
        <Deck tipo={"CardPremiunVerde"} tribo={goblin} />
      </div>
    </>
  )
}
