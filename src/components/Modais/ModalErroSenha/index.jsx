import CardBase3d from "../../Card/CardBase3d"
import styles from "./ModalErroSenha.module.scss"
import React, { useState } from 'react'
import fundo from "./image/fundo.png"
import faixa from "./image/faixa.png"
import faixaErro from "./image/faixaErro.png"
import pedras from "./image/pedras.png"
import botao from "./image/bottao.png"

export default function ModalErroSenha({ aoFechar, aberto}) {

 

  

  return (
    <>
      {aberto && (
        <>

          <div className={styles.fundoModal}></div>
          <section className={styles.janelaModal}>

            <CardBase3d velocidade={20000} >
              <img src={fundo} className={styles.fundo} alt="" />
              <img src={faixa} className={styles.faixa} alt="" />
              <img src={faixaErro} className={styles.faixaErro} alt="" />
              <img src={pedras} className={styles.pedras} alt="" />
              <img src={botao} className={styles.botao} onClick={()=> aoFechar(prev=>!prev)} alt="" />
              <h2 className={styles.erro}>E-mail ou Senha Inválidos</h2>
            </CardBase3d>



          </section>
        </>
      )}
    </>
  )
}
