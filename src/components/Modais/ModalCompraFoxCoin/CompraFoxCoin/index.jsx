import styles from "./CompraFoxCoin.module.scss"
import React, { useContext, useState } from 'react'
import ValoresCard from "../ValoresCard"
import { FirebaseContext } from "../../../../common/context/FirebaseConfig";
import { CarrinhoContext } from "../../../../common/context/Carrinho";
import CarteiraCarrinho from "../../../Feature/Carrinho/Carteira";
import BotoesDoModalCard from "../../../Feature/ModalCardPersonagem/BotoesDoModalCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import FotoCard from "../../../Feature/ModalCardPersonagem/FotoCard";
import imagem from "../image/qrCode.png"

export default function CompraFoxCoin() {
  const { atualizaSaldo, setAtualizaSaldo, handleArmazenaValorDoSaldoComprado,
    handleAtualizaSaldoComprado, saldoContext } = useContext(FirebaseContext)
  const { saldo } = useContext(CarrinhoContext)
  const [comprar, setComprar] = useState(false)
  const qrCode = {
    nome:"Escaneie o QrCode !",
    imagem:imagem
  }
  const handleApaga = () => {
    setAtualizaSaldo(0)
  }
  const handleCompra = async () => {
    setComprar(prev => !prev);
    await handleAtualizaSaldoComprado();
    handleArmazenaValorDoSaldoComprado();
  };
  
  return (
    <section className={styles.container}>
      <h2 className={styles.container_titulo}>Aproveita que é Free!!!</h2>
      {!comprar && (
        <ValoresCard />
      )}
        {comprar && (
        <FotoCard card={qrCode} sombra={false}/>
      )}
      <div className={styles.container_saldo}>
        <div>
          <CarteiraCarrinho valorCarteira={saldoContext} valorItens={atualizaSaldo} />
        </div>
        <BotoesDoModalCard onClickIcone1={handleApaga} onClickIcone2={handleCompra} icone1={<FontAwesomeIcon icon={faTrashArrowUp} />} icone2={<FontAwesomeIcon icon={faCreditCard} />} />
      </div>
    </section>

  );
}

