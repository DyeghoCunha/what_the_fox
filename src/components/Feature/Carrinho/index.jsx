import React, { useContext, useEffect, useState } from 'react'
import styles from "./Carrinho.module.scss"
import CarteiraCarrinho from './Carteira';
import BotoesDoModalCard from '../ModalCardPersonagem/BotoesDoModalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHand, faMoneyBillTransfer, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';




export default function Carrinho({ card, onClick }) {

  const [saldo, setSaldo] = useState(756)
  const [podeComprar, setPodeComprar] = useState(null)

  const valor = 580;


  const pagamento = saldo - valor

  useEffect(() => {
    if (pagamento > 0) {
      setPodeComprar(true)
    } else {
      setPodeComprar(false)
    }
  }, [pagamento])

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.container_titulo}>Carrinho</h2>
        <CarteiraCarrinho valorCarteira={600} valorItens={1590} />
        <div className={styles.container_saldoFinal}>
          <h2 className={styles.container_saldoFinal_titulo}>Saldo Final</h2>
          <p className={`${!podeComprar ? styles.naoPodeComprar : ""} ${styles.container_saldoFinal_valor}`}><FontAwesomeIcon icon={faMoneyBillTransfer} />{pagamento}</p>
        </div>
      
      <div className={styles.container_botoes}>
        <BotoesDoModalCard icone2={!podeComprar ? <FontAwesomeIcon icon={faHand} /> : <FontAwesomeIcon icon={faCartArrowDown} />} icone1={<FontAwesomeIcon icon={faTrashArrowUp} />} />
      </div>
</section>
    </>
  )
}
