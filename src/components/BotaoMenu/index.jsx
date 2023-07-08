import React from 'react'

import styles from './BotaoMenu.module.scss'
import './BotaoMenu.module.scss'

import { useLocation } from 'react-router-dom'



export default function BotaoMenu({ children, link }) {
  const localizacao = useLocation();

  return (
 <section className={styles.container}>

      <div className={styles.container_luz}>

        <div className={styles.container_luz_icone}>
          <div className={`${styles.container_luz_icone_imagem} `}>{children}</div>
        </div>

        <div className={` ${styles.container_luz_tampa} ${localizacao.pathname === link ? '' : styles.aoClicar}`} >
          <div className={styles.container_luz_tampa_imagem}>{children}</div>
        </div>
        <span className={styles.container_luz_base}><i className={styles.container_luz_base_RGB}></i></span>
      </div>
    </section>


  )
}
