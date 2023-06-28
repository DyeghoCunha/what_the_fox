import styles from "./BotaoGeral.module.scss"



import React from 'react'

export default function BotaoGeral({tipo, texto, value, onClick}) {




  return (
    <section className={styles.container}>
    <div className={styles.botao_container} >
    <button className={styles.botao} value={value} onClick={onClick} type={tipo}>
      <h2 className={styles.texto}>{texto}</h2></button>
    </div>
    </section>
  )
}
