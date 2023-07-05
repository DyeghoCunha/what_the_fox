import { DiGithubBadge } from "react-icons/di"
import { AiFillGoogleCircle } from "react-icons/ai";
import BotaoGeral from "../BotãoGeral"
import styles from "./BotoesDeLogin.module.scss"
import React from 'react'

export default function BotoesDeLogin({ githubLogin, googleLogin, normalLogin }) {
  return (

    <section className={styles.container}>
      <div className={styles.container_botoes}>

        <BotaoGeral onClick={normalLogin} texto={"Login"} />

        <div className={styles.container_botoes_midiasSociais}>

          <BotaoGeral onClick={githubLogin} icone={<DiGithubBadge />} />
          <BotaoGeral onClick={googleLogin} icone={<AiFillGoogleCircle />} />
          
        </div>
      </div>

    </section>

  )
}
