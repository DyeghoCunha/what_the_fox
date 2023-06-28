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
import miniCard3 from "../../components/Decks/image/minicard3.png"
import favoritoOff3 from "../../components/Decks/image/heartOff3.png"
import favoritoOn3 from "../../components/Decks/image/heartOn3.png"
import botao3 from "../../components/Decks/image/barra3.png"
import miniCard4 from "../../components/Decks/image/minicard4.png"
import favoritoOff4 from "../../components/Decks/image/heartOff4.png"
import favoritoOn4 from "../../components/Decks/image/heartOn4.png"
import botao4 from "../../components/Decks/image/barra4a.png"

import DeckEmotes from '../../components/Decks/DeckEmote';
import Divisoria from '../../components/Decks/Divisoria';
import Footer from '../../components/Footer';



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
  const miniCardSand = {
    minicard: miniCard3,
    botao: botao3,
    favoritoOn: favoritoOn3,
    favoritoOff: favoritoOff3
  }
    const miniCardOffice = {
    minicard: miniCard4,
    botao: botao4,
    favoritoOn: favoritoOn4,
    favoritoOff: favoritoOff4
  }


  return (
    <>
      <div className={styles.container}>


        <h1> Estou desenvolvendo esta parte </h1>

        <Categorias />
        <Destaques />

        <Divisoria titulo={"Emotes"} />
        <DeckEmotes tribo={emotes} />

         <Divisoria titulo={"Fox"} />
        <Deck tipo={"CardOffice"} tribo={raposas} miniCard={miniCardOffice} />
 
        <Divisoria titulo={"Hemps"} />
        <Deck tipo={"CardPraia"} tribo={hemps} miniCard={miniCardSand} />
 
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
