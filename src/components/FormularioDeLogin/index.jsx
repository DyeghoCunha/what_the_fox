import CampoTexto from "../CampoTexto"
import styles from "./FormularioDeLogin.module.scss"
import React from 'react'

export default function FormualrioDeLogin({emailOnChange, emailValue,senhaOnChange, senhaValue}) {


  return (
    <section className={styles.container}>

    <div className={styles.container_botoes}>
      <div className={styles.container_botoes_midiasSociais}>

   <CampoTexto value={emailValue}  label={"Email"} type="email" onChange={emailOnChange} />
   <CampoTexto value={senhaValue} senha={true} label={"Senha"} type="" onChange={senhaOnChange} />

        
      </div>
    </div>

  </section>
  )
}
