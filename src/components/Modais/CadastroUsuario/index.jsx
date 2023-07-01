import styles from "./ModalCadastroUsuario.module.scss"


import React, { useState } from 'react'

import BotaoGeral from "../../BotãoGeral"
import MiniCardFechadura from "./miniCardFechadura"
import BotaoFoguete from "../../ContainerRGB"
import ContainerRGB from "../../ContainerRGB"
import CampoTexto from "../../CampoTexto/intex"

export default function ModalCadastroUsuario({ aberta, aoFechar, titulo }) {
  //!_____Cadastro de Usuario_____

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaConfirmada, setSenhaConfirmada] = useState("")

console.log(nome)
//!___________________________________________________________



  const [abertaState, setAbertaState] = useState(aberta)
  if (!abertaState) {
    return <></>
  }
  function aoFechar() {

    setAbertaState(prev => !prev)
  }



  return (
    <>

      <div onClick={aoFechar} className={styles.fundoModal} />
      <div className={styles.janelaModal}>
        <div className={styles.tituloModalWrapper}>
          <h2 className={styles.tituloModal}>{titulo}</h2>
          <button onClick={aoFechar} className={styles.botaoFecharModal}>X
            <div className={styles.botaoFecharModal_custom}>
              <BotaoGeral texto={"X"} />
            </div>
          </button>
        </div>

        <ContainerRGB>
          <section className={styles.container}>

            <figure className={styles.container_figura} alt="Desenho de um macaco de terno segurando uma taça com bebida">
              <MiniCardFechadura opacidade={1} />
            </figure>

            <form className={styles.container_formulario}>
              <div className={styles.container_formulario_nomeEmail}>
                <CampoTexto value={nome} onChange={setNome} label={"Nome"} type={"text"} />
                <CampoTexto value={email} onChange={setEmail} label={"e-mail"} type={"email"} placeholder={"email@exemplo.com"} />
              </div>
              <div className={styles.container_formulario_senha}>
                <CampoTexto value={senha} type={"password"} onChange={setSenha} label={"Senha"} placeholder={"Xxxxxxx#"} />
                <CampoTexto value={senhaConfirmada} type={"password"} onChange={setSenhaConfirmada} label={"Confirmar Senha"} placeholder={"Xxxxxxx#"} />
              </div>

              <div className={styles.container_formulario_botao}>
                <BotaoGeral texto={"Enviar"} />
              </div>
            </form>




          </section>
        </ContainerRGB>
      </div>

    </>
  )
}
