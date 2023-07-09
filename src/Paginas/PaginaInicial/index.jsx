import React, { useContext } from 'react'
import styles from './PaginaInicial.module.scss'
import dados from '../../assets/json/dados.json'
import Categorias from '../../components/Categorias';
import Destaques from '../../components/Destaque';
import DeckEmotes from '../../components/Decks/DeckEmote';
import Divisoria from '../../components/Decks/Divisoria';
import { FavoritoContext } from '../../common/context/Favoritos';
import { FirebaseContext } from '../../common/context/FirebaseConfig';
import Produtos from '../../components/Produtos';
import ModalCardPersonagem from '../../components/Feature/ModalCardPersonagem';



export default function PaginaInicial() {



  const props = dados.Raposas;


  const { foxDb, goblinDb, apesDb, bladeMasterDb, hempDb, emoteDb, } = useContext(FirebaseContext)



  return (
    <>

      <div className={styles.container}>
        <ModalCardPersonagem card={props[2]} />
        <Categorias />
        <Destaques />
        <Divisoria titulo={"Emotes"} />
        <DeckEmotes tribo={emoteDb} />

    
        <Produtos estiloCard={"CardOffice"} miniCard={"miniCardOffice"} titulo={"Fox"} tribo={foxDb} />
        <Produtos estiloCard={"CardPraia"} miniCard={"miniCardSand"} titulo={"Hemps"} tribo={hempDb} />
        <Produtos estiloCard={"CardVerde"} miniCard={"miniCardVerde"} titulo={"Goblins"} tribo={goblinDb} />
        <Produtos estiloCard={"CardAzul"} miniCard={"miniCardAzul"} titulo={"BladeMaster"} tribo={bladeMasterDb} />
        <Produtos estiloCard={"CardPremiunAzul"} miniCard={"miniCardAzul"} titulo={"Apes"} tribo={apesDb} />


      </div>
    </>
  )
}
