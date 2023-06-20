import React from 'react'

import styles from './BotaoMenu.module.scss'
import './BotaoMenu.module.scss'

import { useLocation } from 'react-router-dom'



export default function BotaoMenu({ icone }) {
  const localizacao = useLocation();

  return (

    <section className={styles.container}>

      <div className={styles.loader}>

        <div className={styles.rocket}>
          <div className={`${styles.faRocket} `}>{icone}</div>
        </div>

        <div className={` ${styles.click} ${localizacao.pathname === '/' ? '' : styles.clickIn}`} >
        <div className={styles.iconeOff}>{icone}</div>
        </div>

        <span><i></i></span>


      </div>

    </section>


  )
}
