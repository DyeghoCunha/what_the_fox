import React from 'react'
import styles from './PaginaInicial.module.scss'
import Deck from '../../components/Decks'
import dados from '../../assets/json/dados.json'
import Categorias from '../../components/Categorias';
import Destaques from '../../components/Destaque';

import miniCard1 from "../../components/Decks/image/minicard1.png"
import botao1 from "../../components/Decks/image/barra.png"
import favoritoOff1 from "../../components/Decks/image/heartOff1.png"
import favoritoOn1 from "../../components/Decks/image/heartOn1.png"
import miniCard2 from "../../components/Decks/image/minicard2.png"
import botao2 from "../../components/Decks/image/barra2.png"
import favoritoOff2 from "../../components/Decks/image/heartOff2.png"
import favoritoOn2 from "../../components/Decks/image/heartOn2.png"
import AbModal from '../../components/Modais/Modal';
import CardBase3d from '../../components/Card/CardBase3d';
import CardEmote from '../../components/Card/CardMain/CardEmote';
import DeckEmotes from '../../components/Decks/DeckEmote';


export default function PaginaInicial() {

  const goblin = dados.Goblins;
  const emotes = dados.Emotes


  const miniCardVerde = {
    minicard: miniCard1,
    botao: botao1,
    favoritoOn: favoritoOn1,
    favoritoOff: favoritoOff1
  }
  const miniCardAzul = {
    minicard: miniCard2,
    botao: botao2,
    favoritoOn: favoritoOn2,
    favoritoOff: favoritoOff2
  }


  return (
    <>
      <div className={styles.container}>
   
        <Categorias /> 
        <Destaques />
        
        <DeckEmotes tribo={emotes}/>

        <Deck tipo={"CardPremiunAzul"} tribo={goblin} miniCard={miniCardAzul} />
        <Deck tipo={"CardPremiunVerde"} tribo={goblin} miniCard={miniCardVerde}/>
        <Deck tipo={"CardAzul"} tribo={goblin} miniCard={miniCardAzul} />
        <Deck tipo={"CardVerde"} tribo={goblin} miniCard={miniCardVerde}/> 
      </div>
    </>
  )
}
