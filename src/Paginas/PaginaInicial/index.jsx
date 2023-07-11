import React, { useContext } from 'react'
import styles from './PaginaInicial.module.scss'
import Categorias from '../../components/Categorias';
import Destaques from '../../components/Destaque';
import DeckEmotes from '../../components/Decks/DeckEmote';
import Divisoria from '../../components/Decks/Divisoria';
import { FirebaseContext } from '../../common/context/FirebaseConfig';
import Produtos from '../../components/Produtos';
import { BuscaContext } from '../../common/context/Busca';


export default function PaginaInicial() {

  const { foxDb, goblinDb, apesDb, bladeMasterDb, hempDb, emoteDb, } = useContext(FirebaseContext)
  const { objetos } = useContext(BuscaContext);

  //console.log("Pagina Inicial: ", objetos)
  return (
    <>

      <div className={styles.container}>

{!objetos &&(
  <Produtos id="Pesquisa#1" estiloCard={"CardBusca"} miniCard={"miniCardBusca"} titulo={"Resultado"} tribo={objetos} />
)}

        {objetos && (
          <>
            <Categorias />
            <Destaques />
            <Divisoria id="Emotes#1" titulo={"Emotes"} />
            <DeckEmotes tribo={emoteDb} />
            <Produtos id="Fox#1" estiloCard={"CardOffice"} miniCard={"miniCardOffice"} titulo={"Fox"} tribo={foxDb} />
            <Produtos id="Hemp#1" estiloCard={"CardPraia"} miniCard={"miniCardSand"} titulo={"Hemps"} tribo={hempDb} />
            <Produtos id="Goblin#1" estiloCard={"CardVerde"} miniCard={"miniCardVerde"} titulo={"Goblins"} tribo={goblinDb} />
            <Produtos id="BladeMaster#1" estiloCard={"CardAzul"} miniCard={"miniCardAzul"} titulo={"BladeMaster"} tribo={bladeMasterDb} />
            <Produtos id="Apes#1" estiloCard={"CardPremiunAzul"} miniCard={"miniCardAzul"} titulo={"Apes"} tribo={apesDb} />
          </>
        )}
      </div>
    </>
  )
}
