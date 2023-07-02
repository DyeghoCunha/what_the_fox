import styles from "./ModalLoginUsuario.module.scss"


import React, { useState } from 'react'

import BotaoGeral from "../../BotãoGeral"
import ContainerRGB from "../../ContainerRGB"
import CampoTexto from "../../CampoTexto/intex"
import axios from "axios"
import ModalCadastroUsuario from "../CadastroUsuario"
import ModalErroSenha from "../ModalErroSenha"
import MiniCardFechadura from "../CadastroUsuario/miniCardFechadura"

export default function ModalLoginUsuario({ aberta, aoFechar, titulo }) {

  const [registro, setRegistro] = useState(false)
  const [opacidade, setOpacidade] = useState(false)
  const [aprovado, setAprovado] = useState(false)
  const [erro, setErro] = useState("")
  const [erroModal, setErroModal] = useState(false)

  //!_____Login de Usuario_____

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  function aoSubmeterFormulario(evento) {
    evento.preventDefault()
    const usuario = {
      email,
      senha
    }

    axios.post("http://localhost:8000/public/login", usuario)

      .then(resposta => {
        console.log(resposta)
        setOpacidade(prev => !prev)
        setAprovado(prev => !prev)
      })
      .catch(erro => {
        if (erro?.response?.data?.message) {
          console.log(erro.response.data.message);
          setErro(erro.response.data.message);
          setErroModal(true)
        } else {
          alert("Aconteceu um erro iniesperado com o seu login")
        }
      })
  }

  console.log("ERRO:", erro.length)
  //!___________________________________________________________

  function handleClickRegistro() {

    setRegistro(prev => !prev)
  }

  return (
    <>

      {registro && (
        <ModalCadastroUsuario aoFechar={setRegistro} />
      )}


        <div className={styles.container_modalErro}>
          <ModalErroSenha aoFechar={setErroModal} aberto={erroModal} />
        </div>
    

      {!registro && (
        <>
          <div onClick={event => aoFechar(prev => !prev)} className={styles.fundoModal} />
          <div className={styles.janelaModal}>
            <div className={styles.tituloModalWrapper}>
              <h2 className={styles.tituloModal}>{titulo}</h2>
              <button onClick={event => aoFechar(prev => !prev)} className={styles.botaoFecharModal}>X
                <div className={styles.botaoFecharModal_custom}>
                  <BotaoGeral texto={"X"} />
                </div>
              </button>
            </div>

            <ContainerRGB aprovado={aprovado}>
              <section className={styles.container}>

                <figure className={styles.container_figura} alt="Desenho de um macaco de terno segurando uma taça com bebida">
                  <MiniCardFechadura opacidade={opacidade} />
                </figure>

                <form className={styles.container_formulario}>
                  <h1>Faça seu Login</h1>
                  <div className={styles.container_formulario_nomeEmail}>
                    <CampoTexto value={email} onChange={setEmail} label={"e-mail"} type={"email"} placeholder={"email@exemplo.com"} />
                    <CampoTexto value={senha} type={"password"} onChange={setSenha} label={"Senha"} placeholder={"Xxxxxxx#"} />
                  </div>


                  <div className={styles.container_formulario_botao}>
                    <BotaoGeral onClick={aoSubmeterFormulario} texto={"Login"} />
                  </div>

                  <div onClick={handleClickRegistro} className={styles.container_formulario_registrar}>

                    <h3>Registre-se</h3>

                  </div>



                </form>

              </section>
            </ContainerRGB>
          </div>
        </>
      )}
    </>
  )
}
