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
import { CarrinhoContext } from '../../common/context/Carrinho'




export default function PaginaCarrinho({ card, onClick }) {

  const [saldo, setSaldo] = useState(0)
  const [podeComprar, setPodeComprar] = useState(null)
  const { carrinhoProdutos, valorTotalDoCarrinho} = useContext(CarrinhoContext)
  const carrinho = localStorage.getItem('carrinhoProdutos')

  const valor = 580;

  useEffect(()=>{

 window.scrollTo(0, 300);
  },[])

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

        <div className={styles.container_produtos}>

          {carrinhoProdutos.map((card) => (
            <ItemDoCarrinho  card={card} />
          ))}
        </div>

        <div className={styles.container_carteira}>
          <Carrinho valorDoCarrinho={valorTotalDoCarrinho}  />
        </div>

      </section>


    </>
  )
}
