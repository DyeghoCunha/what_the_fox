import styles from "./BotaoGeral.module.scss"



import React from 'react'

export default function BotaoGeral({tipo, texto}) {
  return (
    <section className={styles.container}>
    <div className={styles.botao_container} >
    <button className={styles.botao} type={tipo}>{texto}</button>
    </div>
    </section>
  )
}
