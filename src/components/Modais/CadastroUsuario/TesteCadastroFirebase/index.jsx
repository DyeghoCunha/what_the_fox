import styles from "./TesteCadastroFirebase.module.scss"
import React, { useContext, useEffect, useState } from 'react'
import ContainerRGB from "../../../ContainerRGB"
import CampoTexto from "../../../CampoTexto/index"
import BotaoGeral from "../../../BotãoGeral"


import { FirebaseContext, app } from "../../../../common/context/FirebaseConfig"




const TesteCadastroFirebase = () => {

  const { email, setEmail, password, setPassword, idade, setIdade, nome, setNome, error, handleAddDadosUsuario,handleAddDados, getDataQuery, handleSignUp,
    handleSignIn, handleSubmitGoogle, handleSubmitGithub, usuario, getData, handleLogOut,handleAddDadosNoBandoDeDados } = useContext(FirebaseContext)



  if (usuario) {
    console.log(usuario)
  }


  return (
    <>



      <div className={styles.janelaModal}>

        <ContainerRGB>
          <section className={styles.container}>

            <form className={styles.container_formulario}>

              <div className={styles.container_formulario_nomeEmail}>
                

                <CampoTexto value={nome} onChange={setNome} label={"Nome"} type={"text"} placeholder={""} />
                <CampoTexto value={email} onChange={setEmail} label={"Email"} type={"email"} placeholder={""} />
                <CampoTexto value={idade} onChange={setIdade} label={"Idade"} type={"number"} placeholder={""} />
              </div>

              <div className={styles.container_formulario_senha}>
                <h2>Logar</h2>
                <CampoTexto value={email} onChange={setEmail} label={"Email"} type={"email"} placeholder={""} />
                <CampoTexto value={password} onChange={setPassword} label={"Senha"} type={"text"} placeholder={""} />
                {error && <p>{error}</p>}
                {usuario && <p>{usuario.displayName}</p>}
                {usuario && <img src={usuario.photoURL} />}
              </div>

              <div className={styles.container_formulario_botao} >
                <BotaoGeral onClick={handleSignIn} texto={"Log In"} />

                <BotaoGeral onClick={handleSignUp} texto={"Registra"} />
                <BotaoGeral onClick={handleLogOut} texto={"Log Out"} />
                <BotaoGeral onClick={""} texto={"Add"} />


                {/*   <BotaoGeral onClick={handleSubmitGoogle} texto={"Google"} />
                <BotaoGeral onClick={handleSubmitGithub} texto={"GitHub"} /> */}


              </div>
            </form>



          </section>
        </ContainerRGB>
      </div>
    </>
  )
}
export default TesteCadastroFirebase