import React, { useContext } from 'react'
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
import { FavoritoContext } from '../../common/context/Favoritos';
import ModalCard from '../../components/Modais/Modal/ModalCard';
import { FirebaseContext } from '../../common/context/FirebaseConfig';
import Produtos from '../../components/Produtos';



export default function PaginaInicial() {

  const { aberto, cardModal } = useContext(FavoritoContext)
 

  const emotes = dados.Emotes;
 

 const { foxDb, goblinDb, apesDb, bladeMasterDb, hempDb, emoteDb, } = useContext(FirebaseContext)
  


  return (
    <>



      <div className={styles.container}>

        <Categorias />
        <Destaques />
        <Divisoria titulo={"Emotes"} />
        <DeckEmotes tribo={emotes} />

        {aberto && (
          <div className={styles.modal}>
            <ModalCard card={cardModal} />
          </div>
        )}

       <Produtos estiloCard={"CardOffice"} miniCard={"miniCardOffice"} titulo={"Fox"} tribo={foxDb}/>
       <Produtos estiloCard={"CardPraia"} miniCard={"miniCardSand"} titulo={"Hemps"} tribo={hempDb}/>
       <Produtos estiloCard={"CardVerde"} miniCard={"miniCardVerde"} titulo={"Goblins"} tribo={goblinDb}/>
       <Produtos estiloCard={"CardAzul"} miniCard={"miniCardAzul"} titulo={"BladeMaster"} tribo={bladeMasterDb}/>
       <Produtos estiloCard={"CardPremiunAzul"} miniCard={"miniCardAzul"} titulo={"Apes"} tribo={apesDb}/>
       

      </div>
    </>
  )
}
