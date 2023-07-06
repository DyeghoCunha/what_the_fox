import CampoTexto from "../CampoTexto"
import styles from "./FormularioDeLogin.module.scss"
import React from 'react'

export default function FormularioDeLogin({ emailOnChange, emailValue, senhaOnChange, senhaValue }) {


  return (
    <section className={styles.container}>

      <div className={styles.container_input}>
        <CampoTexto value={emailValue} label={"Email"} type="email" onChange={emailOnChange} />
        <CampoTexto value={senhaValue} senha={true} label={"Senha"} type="" onChange={senhaOnChange} />
      </div>

    </section>
  )
}
