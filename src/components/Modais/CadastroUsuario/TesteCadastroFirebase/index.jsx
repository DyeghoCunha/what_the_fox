import styles from "./TesteCadastroFirebase.module.scss"
import React, { useContext, useEffect, useState } from 'react'
import ContainerRGB from "../../../ContainerRGB"
import CampoTexto from "../../../CampoTexto/intex"
import BotaoGeral from "../../../BotãoGeral"


import { FirebaseContext, app } from "../../../../common/context/FirebaseConfig"




const TesteCadastroFirebase = () => {

  const { email, setEmail, password, setPassword, error, handleSignUp, handleSignIn, handleSubmitGoogle, handleSubmitGithub, usuario } = useContext(FirebaseContext)


  console.log(email)
  console.log(password)
  if(usuario){
    console.log(usuario)
  }


  return (
    <>



      <div className={styles.janelaModal}>

        <ContainerRGB>
          <section className={styles.container}>

            <form className={styles.container_formulario}>
              <div className={styles.container_formulario_nomeEmail}>
                <CampoTexto value={email} onChange={setEmail} label={"e-mail"} type={"email"} placeholder={"email@exemplo.com"} />

                <CampoTexto value={password} type={"password"} onChange={setPassword} label={"Senha"} placeholder={"Xxxxxxx#"} />

              </div>
              <div className={styles.container_formulario_senha}>

              {error && <p>{error}</p>}
            {usuario && <p>{usuario.displayName}</p>}
             {usuario && <img src={usuario.photoURL}/>}
              </div>

              <div className={styles.container_formulario_botao} >
                <BotaoGeral onClick={handleSignUp} texto={"Cadastrar"} />
                <BotaoGeral onClick={handleSignIn} texto={"Logar"} />
                <BotaoGeral onClick={handleSubmitGoogle} texto={"Google"} />
                <BotaoGeral onClick={handleSubmitGithub} texto={"GitHub"} />


              </div>
            </form>



          </section>
        </ContainerRGB>
      </div>
    </>
  )
}
export default TesteCadastroFirebase