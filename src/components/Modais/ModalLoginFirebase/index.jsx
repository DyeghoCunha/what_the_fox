import styles from "./ModalLoginFirebase.module.scss"

import React, { useContext, useEffect, useState } from 'react'
import ContainerRGB from "../../ContainerRGB"
import ModalErroSenha from "../ModalErroSenha"
import MiniCardFechadura from "../CadastroUsuario/miniCardFechadura"
import FormularioDeLogin from "../../FormularioDeLogin"
import BotoesDeLogin from "../../BotoesDeLogin"
import { FirebaseContext } from "../../../common/context/FirebaseConfig"
import BoasVindasCard from "./BoasVindasCard"

export default function ModalLoginFirebase({ aberta, aoFechar, titulo }) {

  const [registro, setRegistro] = useState(false)
  const [opacidade, setOpacidade] = useState(false)
  const [aprovado, setAprovado] = useState(false)
  const [erro, setErro] = useState("")
  const [erroModal, setErroModal] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const { email, setEmail, password, setPassword, error, handleSignIn, handleSignUp, handleSubmitGoogle,
    handleSubmitGithub, usuario, handleSignUpComBandoDeDados, logado } = useContext(FirebaseContext)


  function aoSubmeterFormulario(evento) {
    evento.preventDefault()
    console.log("Enviou")
  }


  return (
    <>
      <div className={styles.container_modalErro}>
        <ModalErroSenha aoFechar={setErroModal} aberto={erroModal} />
      </div>

      <>
        <div onClick={event => aoFechar(prev => !prev)} className={styles.fundoModal} />
        <div className={styles.janelaModal}>
          <button onClick={event => aoFechar(prev => !prev)} className={styles.botaoFecharModal}>X
          </button>
          <ContainerRGB aprovado={logado}>
            <section className={styles.container}>
              <div className={styles.container_foto}>
                <MiniCardFechadura opacidade={logado} />
              </div>

              <form className={styles.container_formulario}>

                {logado && (
                  <div className={styles.container_fomrulario_BoasVindasCard}>
                   <BoasVindasCard aoFechar={aoFechar}/>
                  </div> 
                )}
                {!logado && (
                  <>
                    <h1 className={styles.container_formulario_titulo}>Faça seu Login</h1>
                    <div className={styles.container_formulario_nomeEmail}>
                      <FormularioDeLogin emailValue={email} emailOnChange={setEmail} senhaValue={password} senhaOnChange={setPassword} />
                    </div>
                    <div className={styles.container_formulario_botaoRegistrar}>
                      <BotoesDeLogin githubLogin={handleSubmitGithub} googleLogin={handleSubmitGoogle} normalLogin={handleSignUpComBandoDeDados} />
                    </div>
                  </>
                )}
              
              </form>
            </section>
          </ContainerRGB>
        </div>
      </>

    </>
  )
}
