import styles from "./ModalCadastroUsuario.module.scss"


import React, { useEffect, useState } from 'react'

import BotaoGeral from "../../BotãoGeral"
import MiniCardFechadura from "./miniCardFechadura"
import ContainerRGB from "../../ContainerRGB"
import CampoTexto from "../../CampoTexto/"
import axios from "axios"

export default function ModalCadastroUsuario({ aberta, aoFechar, titulo }) {
  //!_____Cadastro de Usuario_____

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaConfirmada, setSenhaConfirmada] = useState("")
const [abertaState, setAbertaState] = useState(aberta)
const [opacidade, setOpacidade] = useState(1)

  function aoSubmeterFormulario(evento) {
    evento.preventDefault()
    const usuario = {
      nome,
      email,
      senha
    }


    axios.post("http://localhost:8000/public/registrar", usuario)

      .then(() => {
           alert("Usuário foi cadastrado com sucesso!")
        setNome("")
        setEmail("")
        setSenha("")
        setSenhaConfirmada("")
        aoFechar(prev=>!prev)
      })
      .catch(()=>{
        alert("Alguma coisa deu errado")
      })
 
  }

  //!___________________________________________________________



  useEffect(()=>{
  
  console.log("AbertaState:",abertaState)

},[abertaState])


 

  return (
  <>


      <div onClick={event => aoFechar(prev=>!prev)}  className={styles.fundoModal} />
      <div className={styles.janelaModal}>
        <div className={styles.tituloModalWrapper}>
          <h2 className={styles.tituloModal}>{titulo}</h2>
          <button onClick={event => aoFechar(prev=>!prev)} className={styles.botaoFecharModal}>X
            <div className={styles.botaoFecharModal_custom}>
              <BotaoGeral texto={"X"} />
            </div>
          </button>
        </div>

        <ContainerRGB>
          <section className={styles.container}>

            <figure className={styles.container_figura} alt="Desenho de um macaco de terno segurando uma taça com bebida">
              <MiniCardFechadura opacidade={opacidade} />
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
                <BotaoGeral onClick={aoSubmeterFormulario} texto={"Enviar"} />
              </div>
            </form>

          </section>
        </ContainerRGB>
      </div>
  </>
  )
}
