import React from 'react'
import BannerPaginaInicial from '../../components/Banner/BannerPaginaInicial'
import CardPadrao from '../../components/Card/CardPadrao'
import styles from './PaginaInicial.module.scss'
export default function PaginaInicial() {
  return (
    <div className={styles.container}>
    {/* <BannerPaginaInicial/> */}
    <CardPadrao/>

 
    </div>
  )
}
