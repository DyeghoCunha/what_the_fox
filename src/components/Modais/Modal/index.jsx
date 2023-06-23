import styles from "./Modal.module.scss"


import React, { useState } from 'react'

export default function AbModal({ children, aberta, aoFechar, titulo }) {


  const [abertaState , setAbertaState] = useState(aberta)

  if (!abertaState) {
    return <></>
  }

  function aoFechar(){
    setAbertaState(prev=>!prev)
  }


  return (
    <>
      <div onClick={aoFechar} className={styles.fundoModal} />
      <div className={styles.janelaModal}>
        <div className={styles.tituloModalWrapper}>
          <h2 className={styles.tituloModal}>{titulo}</h2>
          <button onClick={aoFechar} className={styles.botaoFecharModal}>
            X
          </button>
        </div>
        {children}
      </div>
    </>
  )
}
