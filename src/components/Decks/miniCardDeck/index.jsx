import styles from "./MiniCardDeck.module.scss"
import React, { useContext, useEffect, useState } from 'react'

import valor10 from "../image/10.png"
import valor150 from "../image/150.png"
import valor50 from "../image/50.png"
import { FavoritoContext } from "../../../common/context/Favoritos"

import miniCard1 from "../../Decks/image/minicard1.png"
import botao1 from "../../Decks/image/barra.png"
import favoritoOff1 from "../../Decks/image/heartOff1.png"
import favoritoOn1 from "../../Decks/image/heartOn1.png"
import miniCard2 from "../../Decks/image/minicard2.png"
import botao2 from "../../Decks/image/barra2.png"
import favoritoOff2 from "../../Decks/image/heartOff2.png"
import favoritoOn2 from "../../Decks/image/heartOn2.png"
import miniCard3 from "../../Decks/image/minicard3.png"
import favoritoOff3 from "../../Decks/image/heartOff3.png"
import favoritoOn3 from "../../Decks/image/heartOn3.png"
import botao3 from "../../Decks/image/barra3.png"
import miniCard4 from "../../Decks/image/minicard4.png"
import favoritoOff4 from "../../Decks/image/heartOff4.png"
import favoritoOn4 from "../../Decks/image/heartOn4.png"
import botao4 from "../../Decks/image/barra4a.png"
import miniCardBusca from "../image/minicardBusca.png"
import favoritoOffBusca from "../image/favoritoOffBusca.png"
import favoritoOnBusca from "../image/favoritoOnBusca.png"
import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { FirebaseContext, database } from "../../../common/context/FirebaseConfig"




export default function MiniCardDeck({ card, miniCard }) {
  const [favorito, setFavorito] = useState(false);
  const { setAberto, setCardModal ,favoritosProdutos,handleRemoveItemDoFavoritoFirebase,handleAdicionaItemNoFavoritoFirebase} = useContext(FavoritoContext)
  const [minicardEstilo, setMinicardEstilo] = useState({})
  const {usuarioUid, usuario} =useContext(FirebaseContext)



// ...

function handleVerificaSeFavorito(card) {
  if (usuario) {
    const itemJaFavorito = favoritosProdutos.some(item => item.id === card.id);
    if (itemJaFavorito) {
      console.log("O item já está nos favoritos:", card);
      // Defina setFavorito como true aqui
      setFavorito(true);
      return;
    }else{console.log("ERRO")}
  }
}



    useEffect(() => {
      const estiloMapping = {
        miniCardVerde: {
          minicard: miniCard1,
          botao: botao1,
          favoritoOn: favoritoOn1,
          favoritoOff: favoritoOff1
        },
        miniCardAzul: {
          minicard: miniCard2,
          botao: botao2,
          favoritoOn: favoritoOn2,
          favoritoOff: favoritoOff2
        },
        miniCardSand: {
          minicard: miniCard3,
          botao: botao3,
          favoritoOn: favoritoOn3,
          favoritoOff: favoritoOff3
        },
        miniCardOffice: {
          minicard: miniCard4,
          botao: botao4,
          favoritoOn: favoritoOn4,
          favoritoOff: favoritoOff4
        }
        ,miniCardBusca:{
          minicard: miniCardBusca,
          favoritoOn: favoritoOnBusca,
          favoritoOff: favoritoOffBusca
        }
      };

      if (miniCard && estiloMapping.hasOwnProperty(miniCard)) {
        setMinicardEstilo(estiloMapping[miniCard]);
      }
      handleVerificaSeFavorito(card);
      
    }, []);


  

  let moedas = 0;
  const parametro = Number(card.valor)


  if (parametro >= 100) {
    moedas = valor150;
  } else if (parametro < 100 && parametro > 50) {
    moedas = valor50;
  } else {
    moedas = valor10;
  }


  useEffect(() => {
    card.favorito = favorito
  }, [favorito])


  function handleFavorito() {
    setFavorito(prev => !prev)
  }
  function handleClick() {
    setAberto(prev => !prev)
    setCardModal(card)
    
    
  }


  return (
    <>
      <div className={styles.container_valor}>
        {!favorito && (
          <img onClick={()=>handleAdicionaItemNoFavoritoFirebase(card)} src={minicardEstilo.favoritoOff} className={styles.favorito} alt="" />
        )}
        {favorito && (
          <img onClick={()=>handleRemoveItemDoFavoritoFirebase(card)} src={minicardEstilo.favoritoOn} className={styles.favorito} alt="" />
        )}
        <h1 className={styles.valor}>{card.valor}</h1>
        <img src={moedas} alt="" className={styles.moedas} />
        <img src={minicardEstilo.minicard} className={styles.fundo_valor} alt="" />

        <div className={styles.botao_container}>
          <h1 className={styles.botao_container_titulo} onClick={handleClick}>Saiba Mais</h1>
          <img className={styles.botao_container_imagem} src={minicardEstilo.botao} alt="" />
        </div>
      </div>
    </>

  )
}
