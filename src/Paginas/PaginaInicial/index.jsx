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
import DeckEmotes from '../../components/Decks/DeckEmote';
import Divisoria from '../../components/Decks/Divisoria';


export default function PaginaInicial() {

  const goblin = dados.Goblins;
  const emotes = dados.Emotes;
  const raposas = dados.Raposas;
  const monkeys = dados.Monkeys;
  const hemps = dados.Hemps;
  const bMaster = dados.Blademaster;


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

    <Divisoria titulo={"Emotes"} />
        <DeckEmotes tribo={emotes} />

        <Divisoria titulo={"Fox"} />
        <Deck tipo={"CardPremiunAzul"} tribo={raposas} miniCard={miniCardAzul} />

        <Divisoria titulo={"Hemps"} />
        <Deck tipo={"CardPremiunVerde"} tribo={hemps} miniCard={miniCardVerde} />

        <Divisoria titulo={"Apes"} />
        <Deck tipo={"CardPremiunAzul"} tribo={monkeys} miniCard={miniCardAzul} />

        <Divisoria titulo={"BladeMaster"} />
        <Deck tipo={"CardAzul"} tribo={bMaster} miniCard={miniCardAzul} /> 

        <Divisoria titulo={"Goblins"} />
        <Deck tipo={"CardVerde"} tribo={goblin} miniCard={miniCardVerde} /> 
      </div>
    </>
  )
}
