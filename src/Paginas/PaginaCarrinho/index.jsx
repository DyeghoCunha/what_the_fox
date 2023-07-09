import React, { useContext, useEffect, useState } from 'react'
import styles from "./PaginaCarrinho.module.scss"
import { FirebaseContext } from '../../common/context/FirebaseConfig'
import ItemDoCarrinho from "../../components/Feature/Carrinho/featItemDoCarrinho"
import dados from "../../assets/json/dados.json"
import BotoesDoModalCard from '../../components/Feature/ModalCardPersonagem/BotoesDoModalCard'
import { faCartArrowDown, faCoins, faHand, faMoneyBillTransfer, faSackDollar, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarteiraCarrinho from '../../components/Feature/Carrinho/Carteira'




export default function PaginaCarrinho({ card, onClick }) {

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
      <section className={styles.base}>
        <ItemDoCarrinho card={dados.Raposas[3]} />
        <section className={styles.container}>
          <h2 className={styles.container_titulo}>Carrinho</h2>
          <CarteiraCarrinho valorCarteira={600} valorItens={1590} />
          <div className={styles.container_saldoFinal}>
            <h2 className={styles.container_saldoFinal_titulo}>Saldo Final</h2>
            <p className={`${!podeComprar ? styles.naoPodeComprar : ""} ${styles.container_saldoFinal_valor}`}><FontAwesomeIcon icon={faMoneyBillTransfer} />{pagamento}</p>
          </div>
        </section>

        <div className={styles.container_botoes}>
          <BotoesDoModalCard icone2={!podeComprar ? <FontAwesomeIcon icon={faHand} /> : <FontAwesomeIcon icon={faCartArrowDown} />} icone1={<FontAwesomeIcon icon={faTrashArrowUp} />} />
        </div>

      </section>


    </>
  )
}
