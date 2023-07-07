import styles from "./BotaoGeral.module.scss"



import React from 'react'

export default function BotaoGeral({ tipo, texto, icone, value, onClick }) {




  return (
    <section className={styles.container}>
      <div className={styles.botao_container} >
        <div className={styles.botao}
          value={value}
          onClick={onClick}
          type={tipo}>

          {texto && (
            <h2 className={styles.texto}>{texto}</h2>
          )}
          {icone && (
            <h1 className={styles.icone}>{icone}</h1>
          )}

        </div>
      </div>
    </section>
  )
}
