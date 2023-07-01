import { FavoritoContext } from "../../../common/context/Favoritos"
import BotaoGeral from "../../BotãoGeral"
import styles from "./Modal.module.scss"


import React, { useContext, useState } from 'react'

export default function AbModal({ children, aberta, aoFechar, titulo }) {

  const { setAberto } = useContext(FavoritoContext)
  const [abertaState, setAbertaState] = useState(aberta)

  if (!abertaState) {
    return <></>
  }

  function aoFechar() {

    setAberto(prev => !prev)
    //setAbertaState(prev => !prev)
  }


  return (
    <>
      <div onClick={aoFechar} className={styles.fundoModal} />
      <div className={styles.janelaModal}>
        <div className={styles.tituloModalWrapper}>
          <h2 className={styles.tituloModal}>{titulo}</h2>
          <button onClick={aoFechar} className={styles.botaoFecharModal}>X
            <div className={styles.botaoFecharModal_custom}>
              <BotaoGeral texto={"X"} />
            </div>
          </button>
        </div>
        {children}
      </div>
    </>
  )
}
