import CompraFoxCoin from "./CompraFoxCoin"
import styles from "./ModalCompraFoxCoin.module.scss"
import React, { useContext } from 'react'
import { ModalCardContext } from "../../../common/context/ModalCard"
import BotaoNeomorph from "../../BotaoNeomorph"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ModalCompraFoxCoin() {
  const { setModalCompraSaldo } = useContext(ModalCardContext)

  const handleCompraFoxCoinModal = () => {
    setModalCompraSaldo(false)
    
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
