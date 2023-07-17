import CompraFoxCoin from "./CompraFoxCoin"
import styles from "./ModalCompraFoxCoin.module.scss"
import React, { useContext } from 'react'
import { ModalCardContext } from "../../../common/context/ModalCard"
import BotaoNeomorph from "../../BotaoNeomorph"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FirebaseContext } from "../../../common/context/FirebaseConfig"

export default function ModalCompraFoxCoin() {
  const { setModalCompraSaldo } = useContext(ModalCardContext)
  const { setAtualizaSaldo } = useContext(FirebaseContext)

  const handleCompraFoxCoinModal = () => {
    setModalCompraSaldo(false)
    setAtualizaSaldo(0) 
  }
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container_modal}>
          <CompraFoxCoin />
        </div>
        <div className={styles.container_botao}>
          <BotaoNeomorph botaoModal={true} onClick={handleCompraFoxCoinModal} ><FontAwesomeIcon icon={faXmark} /></BotaoNeomorph>
        </div>
      </section>
    </>
  )
}
