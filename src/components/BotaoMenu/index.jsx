import React from 'react'

import styles from './BotaoMenu.module.scss'
import './BotaoMenu.module.scss'

import { useLocation } from 'react-router-dom'



export default function BotaoMenu({ children, link }) {
  const localizacao = useLocation();

  return (

    <section className={styles.container}>

      <div className={styles.loader}>

        <div className={styles.rocket}>
          <div className={`${styles.faRocket} `}>{children}</div>
        </div>

        <div className={` ${styles.click} ${localizacao.pathname === link ? '' : styles.clickIn}`} >
        <div className={styles.iconeOff}>{children}</div>
        </div>

        <span><i></i></span>


      </div>

    </section>


  )
}
