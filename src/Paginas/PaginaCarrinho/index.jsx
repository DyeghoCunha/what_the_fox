import React, { useContext, useEffect, useState } from 'react'
import styles from "./PaginaCarrinho.module.scss"
import { FirebaseContext } from '../../common/context/FirebaseConfig'
import ItemDoCarrinho from "../../components/Feature/Carrinho/featItemDoCarrinho"
import dados from "../../assets/json/dados.json"
import BotoesDoModalCard from '../../components/Feature/ModalCardPersonagem/BotoesDoModalCard'
import { faCartArrowDown, faCoins, faHand, faMoneyBillTransfer, faSackDollar, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarteiraCarrinho from '../../components/Feature/Carrinho/Carteira'
import Carrinho from '../../components/Feature/Carrinho'




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
        <Carrinho/>
      </section>


    </>
  )
}
