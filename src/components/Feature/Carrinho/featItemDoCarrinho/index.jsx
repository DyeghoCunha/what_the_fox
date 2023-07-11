import React, { useContext } from 'react'
import styles from "./ItemDoCarrinho.module.scss"
import CardValor from '../../ModalCardPersonagem/CardValor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import FotoPersonagemCarrinho from "../featFotoPersonagem"
import ModalCardPersonagem from '../../ModalCardPersonagem'
import { FavoritoContext } from '../../../../common/context/Favoritos'
import { CarrinhoContext } from '../../../../common/context/Carrinho'


export default function ItemDoCarrinho({ card, onClick }) {

  const { handleRemoveItemDoCarrinhoFirebase } = useContext(CarrinhoContext)
  console.log("ItemDoCarrinho: ", card.id)

  return (
    <>
   
      <section className={styles.base}>
        <FotoPersonagemCarrinho  foto={card} />
        <div>
          <div className={styles.container}>
            <div className={styles.container_foto}>
              <CardValor valor={card.valor} />
            </div>
          </div>
          <button onClick={()=>handleRemoveItemDoCarrinhoFirebase(card)} className={styles.container_botao}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
      </section>

    </>
  )
}
