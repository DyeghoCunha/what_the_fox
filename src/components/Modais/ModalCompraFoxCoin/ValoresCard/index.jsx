import styles from "./ValoresCard.module.scss"
import React, { useContext } from 'react'
import FotoCard from "../../../Feature/ModalCardPersonagem/FotoCard"
import imagem from "../../../Feature/Carrinho/image/macaco.jpg"
import moeda10 from "../../../Decks/image/10.png"
import moeda50 from "../../../Decks/image/50.png"
import moeda150 from "../../../Decks/image/150.png"
import moeda1 from "../../../Card/CardMain/CardEmote/image/FoxCoin5.png"
import moeda2 from "../../../Card/CardMain/CardEmote/image/FoxCoin10.png"
import moeda3 from "../../../Card/CardMain/CardEmote/image/FoxCoin15.png"
import ValoresMiniCard from "../ValoresCard/ValoresMiniCard"
import { FirebaseContext } from "../../../../common/context/FirebaseConfig"

export default function ValoresCard() {
  const { atualizaSaldo, setAtualizaSaldo } = useContext(FirebaseContext);

  const semSaldo = {
    nome: "Tá sem grana é ?!",
    imagem: imagem
  };
  const handleClick = (valor) => {
    setAtualizaSaldo(atualizaSaldo + valor);
  };
  
  return (
    <section className={styles.container}>
      <div className={styles.container_imagem}>
        <FotoCard sombra={false} card={semSaldo} />
      </div>
      <section className={styles.container_valores}>
        <ValoresMiniCard imagem={moeda1} titulo={"10"} onClick={() => handleClick(10)} />
        <ValoresMiniCard imagem={moeda2} titulo={"50"} onClick={() => handleClick(50)} />
        <ValoresMiniCard imagem={moeda3} titulo={"100"} onClick={() => handleClick(100)} />
        <ValoresMiniCard imagem={moeda10} titulo={"300"} onClick={() => handleClick(300)} />
        <ValoresMiniCard imagem={moeda50} titulo={"500"} onClick={() => handleClick(500)} />
        <ValoresMiniCard imagem={moeda150} titulo={"1000"} onClick={() => handleClick(1000)} />
      </section>
    </section>
  );
}
