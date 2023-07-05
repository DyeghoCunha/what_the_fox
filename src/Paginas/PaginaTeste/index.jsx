import React, { useEffect, useState } from 'react';
import TesteCadastroFirebase from '../../components/Modais/CadastroUsuario/TesteCadastroFirebase';
import BotaoGeral from '../../components/BotãoGeral';
import { DiGithubBadge } from "react-icons/di";
import styles from "./PaginaTeste.module.scss"
import BotoesDeLogin from '../../components/BotoesDeLogin';
import FormualrioDeLogin from '../../components/FormularioDeLogin';



export default function PaginaTeste() {

const logGitHub = ()=>{
  console.log("GitHub")
}
const logGoogle = ()=>{
  console.log("Google")
}
const normalLogin = ()=>{
  console.log("Login Normal")
}

  return (

    <>
<div className={styles.container}>
  <FormualrioDeLogin/>
<BotoesDeLogin githubLogin={logGitHub} googleLogin={logGoogle} normalLogin={normalLogin}/>
</div>

    </>

  )

}





