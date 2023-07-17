import React, { useContext, useEffect, useState } from 'react'
import styles from "./PaginaCarrinho.module.scss"
import ItemDoCarrinho from "../../components/Feature/Carrinho/featItemDoCarrinho"
import Carrinho from '../../components/Feature/Carrinho'
import { CarrinhoContext } from '../../common/context/Carrinho'
import { ModalCardContext } from '../../common/context/ModalCard'
import ModalCompraFoxCoin from '../../components/Modais/ModalCompraFoxCoin'




export default function PaginaCarrinho({ card, onClick }) {

  const [podeComprar, setPodeComprar] = useState(null)
  const { carrinhoProdutos, valorTotalDoCarrinho } = useContext(CarrinhoContext)
  const { modalCompraSaldo } = useContext(ModalCardContext)


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])



  return (
    <>
      <section className={styles.container}>
        {modalCompraSaldo && (
          <ModalCompraFoxCoin />
        )}
        <div className={styles.container_produtos}>

          {carrinhoProdutos.map((card) => (
            <ItemDoCarrinho card={card} />
          ))}
        </div>

        <div className={styles.container_carteira}>
          <Carrinho valorDoCarrinho={valorTotalDoCarrinho} />
        </div>

      </section>


    </>
  )
}
