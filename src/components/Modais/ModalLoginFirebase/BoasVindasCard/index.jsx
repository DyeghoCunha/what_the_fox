import { FirebaseContext } from "../../../../common/context/FirebaseConfig"
import FotoPersonagemCarrinho from "../../../Feature/Carrinho/featFotoPersonagem"
import styles from "./BoasVindasCard.module.scss"
import foto from "../../../../assets/images/cardAnonimo.png"
import React, { useContext } from 'react'
import { CarrinhoContext } from "../../../../common/context/Carrinho"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSackDollar } from "@fortawesome/free-solid-svg-icons"
import BotaoGeral from "../../../BotãoGeral"
import { ModalCardContext } from "../../../../common/context/ModalCard"

export default function BoasVindasCard() {
  const { usuarioFoto, usuarioNome } = useContext(FirebaseContext)
  const { saldo } = useContext(CarrinhoContext)
  const { modalCompraSaldo, setModalCompraSaldo } = useContext(ModalCardContext)
  let imagem = ""

  if (usuarioFoto) {
    imagem = usuarioFoto
  } else {
    imagem = foto
  }

  const handleCompraSaldo = ()=>{
    setModalCompraSaldo(prev=>!prev)
    console.log("CompraSaldo: ", modalCompraSaldo)
  }

  return (


    <section className={styles.container}>
      <div className={styles.container_usuario}>
        <FotoPersonagemCarrinho imagem={imagem} />
        <p className={styles.container_usuario_nome}>Ola! <strong className={styles.container_usuario_nome_realce}>{usuarioNome}</strong></p>
      </div>
      
      <div className={styles.container_saldo}>
        <div className={styles.container_saldo_valor}>
          <p>Seu Saldo é:</p>
          <p className={styles.container_saldo_valor_icone}><FontAwesomeIcon icon={faSackDollar} />{saldo}</p>
        </div>
        { saldo > 100 && (
        <div className={styles.container_saldo_card}>
            <p>Divirta-se!!</p>
        </div>
          )}
          {saldo < 100 && (
          <div className={styles.container_saldo_card}>
            <p>Vish...só isso ? </p>
            <BotaoGeral onClick={handleCompraSaldo} value={"Crédito"} tipo={"text"} texto={"Crédito"} />
          </div>
        )} 
      </div>

    </section>
  )
}
