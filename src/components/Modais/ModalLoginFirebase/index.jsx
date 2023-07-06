import styles from "./ModalLoginFirebase.module.scss"

import React, { useContext, useState } from 'react'
import BotaoGeral from "../../BotãoGeral"
import ContainerRGB from "../../ContainerRGB"
import CampoTexto from "../../CampoTexto"
import ModalErroSenha from "../ModalErroSenha"
import MiniCardFechadura from "../CadastroUsuario/miniCardFechadura"
import { FavoritoContext } from "../../../common/context/Favoritos"
import FormularioDeLogin from "../../FormularioDeLogin"
import BotoesDeLogin from "../../BotoesDeLogin"
import { FirebaseContext } from "../../../common/context/FirebaseConfig"

export default function ModalLoginFirebase({ aberta, aoFechar, titulo }) {

  const [registro, setRegistro] = useState(false)
  const [opacidade, setOpacidade] = useState(false)
  const [aprovado, setAprovado] = useState(false)
  const [erro, setErro] = useState("")
  const [erroModal, setErroModal] = useState(false)

  //!_____Login de Usuario_____
  const { setAberto } = useContext(FavoritoContext)
  const { email, setEmail, password,setPassword,error,handleSignIn, handleSignUp, handleSubmitGoogle,
  handleSubmitGithub, usuario,handleLogOut,handleSignUpComBandoDeDados} = useContext(FirebaseContext)


  function aoSubmeterFormulario(evento) {
    evento.preventDefault()
    console.log("Enviou")
  }
if(usuario){
  console.log(`
  ModalLogin-----
  Erro: ${error}
  Usuario: ${usuario}
  Foto: ${usuario.photoURL}
  Nome:${usuario.displayName}
  
  `)}

  

  function aoFechar() {
    setAberto(prev => !prev)
    //setAbertaState(prev => !prev)
  }



  return (
    <>
      <div className={styles.container_modalErro}>
        <ModalErroSenha aoFechar={setErroModal} aberto={erroModal} />
      </div>
      <>
        <div onClick={event => aoFechar(prev => !prev)} className={styles.fundoModal} />

        <div className={styles.janelaModal}>
          <button onClick={handleLogOut} className={styles.botaoFecharModal}>X
          </button>
          <ContainerRGB aprovado={aprovado}>
            <section className={styles.container}>
              <div className={styles.container_foto}>
                <MiniCardFechadura opacidade={0} />
              </div>

              <form className={styles.container_formulario}>
                <h1 className={styles.container_formulario_titulo}>Faça seu Login</h1>
                <div className={styles.container_formulario_nomeEmail}>
                  <FormularioDeLogin emailValue={email}  emailOnChange={setEmail} senhaValue={password} senhaOnChange={setPassword}/>
                </div>

                <div  className={styles.container_formulario_botaoRegistrar}>
                  <BotoesDeLogin githubLogin={handleSubmitGithub} googleLogin={handleSubmitGoogle} normalLogin={handleSignUpComBandoDeDados} />
                </div>

              </form>
            </section>
          </ContainerRGB>
        </div>
      </>
    </>
  )
}
