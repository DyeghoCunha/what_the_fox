import React, { useContext, useEffect, useState } from 'react'
import styles from "./Carrinho.module.scss"
import CarteiraCarrinho from './Carteira';
import BotoesDoModalCard from '../ModalCardPersonagem/BotoesDoModalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHand, faMoneyBillTransfer, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import FotoCard from '../ModalCardPersonagem/FotoCard';
import imagem from "../Carrinho/image/macaco.jpg"
import { CarrinhoContext } from '../../../common/context/Carrinho';




export default function Carrinho({ card, onClick ,valorDoCarrinho }) {

  
  const [podeComprar, setPodeComprar] = useState(null)
  const {handleLimpaCarrinhoFirebase,saldo,diminuirSaldo , setSaldo} = useContext(CarrinhoContext)

  const valor = 580;
  const semSaldo = {
    nome: "Você está sem grana !",
    imagem: imagem
  }

  const pagamento = saldo - valorDoCarrinho

  useEffect(() => {
    if (pagamento > 0) {
      setPodeComprar(true)
    } else {
      setPodeComprar(false)
    }
  }, [pagamento])

  return (
    <>
      <section className={styles.paginaCarrinho}>
        <section className={styles.container}>
          <h2 className={styles.container_titulo}>Carrinho</h2>
          <CarteiraCarrinho valorCarteira={saldo} valorItens={valorDoCarrinho} />
          <div className={styles.container_saldoFinal}>
            <h2 className={styles.container_saldoFinal_titulo}>Saldo Final</h2>
            <p className={`${!podeComprar ? styles.naoPodeComprar : ""} ${styles.container_saldoFinal_valor}`}><FontAwesomeIcon icon={faMoneyBillTransfer} />{pagamento}</p>
          </div>
        </section>

        {!podeComprar && (
          <div className={styles.container_semSaldo}>
            <FotoCard card={semSaldo} sombra={false} />
          </div>
        )}

        <div className={styles.container_botoes}>
          <BotoesDoModalCard onClickIcone1={handleLimpaCarrinhoFirebase} onClickIcone2={podeComprar ? diminuirSaldo : ""} icone2={!podeComprar ? <FontAwesomeIcon icon={faHand} /> : <FontAwesomeIcon icon={faCartArrowDown} />} icone1={<FontAwesomeIcon icon={faTrashArrowUp} />} />
        </div>
      </section>
    </>
  )
}
