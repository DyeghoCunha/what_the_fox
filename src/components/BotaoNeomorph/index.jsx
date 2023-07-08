import React from 'react'
import styles from './BotaoNeomorph.module.scss'
import { useLocation } from 'react-router-dom'

export default function BotaoNeomorph({ children, link, parametro, botaoModal }) {
  const localizacao = useLocation();

  return (
    <section className={styles.container}>
      <div className={styles.container_luz}>
        <div className={styles.container_luz_icone}>
          <div className={`${styles.container_luz_icone_imagem} `}>{children}</div>
        </div>
        {botaoModal && (
          <div className={` ${styles.container_luz_tampa} ${parametro ? '' : styles.aoClicar}`} >
            <div className={styles.container_luz_tampa_imagem}>{children}</div>
          </div>
        )}
        {link && (
          <div className={` ${styles.container_luz_tampa} ${localizacao.pathname === link ? '' : styles.aoClicar}`} >
            <div className={styles.container_luz_tampa_imagem}>{children}</div>
          </div>
        )}
        <span className={styles.container_luz_base}><i className={styles.container_luz_base_RGB}></i></span>
      </div>
    </section>
  )
}
