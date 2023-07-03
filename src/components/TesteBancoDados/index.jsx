import styles from "./TesteBancoDados.module.scss"
import React, { useContext, } from 'react'
import ContainerRGB from "../ContainerRGB"
import CampoTexto from "../CampoTexto"
import BotaoGeral from "../BotãoGeral"


import { FirebaseContext, app, database } from "../../common/context/FirebaseConfig"




const TesteBancoDados = () => {
  const { email, setEmail, password, setPassword, error, handleSignUp, handleSignIn, handleSubmitGoogle, handleSubmitGithub, usuario,
    handleAddDadosUsuario, getData, updateData, deleteData, setArmazenaInput, handleInputFileFireStorage } = useContext(FirebaseContext)







  return (
    <>
      <div className={styles.janelaModal}>
        <section className={styles.container}>

          <input className={styles.inputFile} type="file" onChange={(event) => setArmazenaInput(event.target.files[0])} />

          <div className={styles.container_formulario_botao} >
            <BotaoGeral onClick={handleInputFileFireStorage} texto={"Cadastrar"} />
          </div>

        </section>
      </div>
    </>
  )
}
export default TesteBancoDados