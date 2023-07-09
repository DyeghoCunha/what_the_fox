import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FotoPersonagemCarrinho from "../featFotoPersonagem"
import styles from "./CarteiraCarrinho.module.scss"
import React, { useContext } from 'react'
import { faCoins, faSackDollar } from "@fortawesome/free-solid-svg-icons"
import { FirebaseContext } from "../../../../common/context/FirebaseConfig"
import fotoAnonima from '../../../../assets/images/cardAnonimo.png'

export default function CarteiraCarrinho({ valorItens, valorCarteira }) {
 const { usuarioFoto } = useContext(FirebaseContext)

 let foto = fotoAnonima

 if (usuarioFoto){
  foto = usuarioFoto
 }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.container_saldo}>
          <FotoPersonagemCarrinho imagem={foto} />
          <section className={styles.carteira}>
            <div className={styles.container_saldo_valorTotal}>
              <h2 className={styles.container_saldo_valorTotal_titulo}>Total</h2>
              <h3 className={styles.container_saldo_valorTotal_valor} ><FontAwesomeIcon icon={faCoins} />{valorItens} </h3>
            </div>
            <div className={styles.container_saldo_valorTotal}>
              <h2 className={styles.container_saldo_valorTotal_titulo}>Carteira</h2>
              <h3 className={styles.container_saldo_valorTotal_valor} ><FontAwesomeIcon icon={faSackDollar} />{valorCarteira} </h3>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
