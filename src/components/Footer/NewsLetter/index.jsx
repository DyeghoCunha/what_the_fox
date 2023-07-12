import { addDoc, collection } from "firebase/firestore";
import Busca from "../../Cabecalho/Busca"
import styles from "./NewsLetter.module.scss"
import { database } from "../../../common/context/FirebaseConfig";

import React, { useEffect, useState } from 'react'





export default function NewsLetter() {

  const [email, setEmail] = useState("")
  const [enviado, setEnviado] = useState("")


  useEffect(()=>{
    addDoc(collection(database, "email"), { email })
    .then(() => {
      setEnviado("Email enviado com sucesso !!")
    })
    .catch((error) => {
      console.error("Erro ao enviar o email:", error);
    });

  },[email])
  



  return (

    <section className={styles.container}>

      <h2 className={styles.container_chamada}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra?
        <strong className={styles.container_chamada_realce}>Cadastre-se!</strong> </h2>

      <div className={styles.container_formulario}>
        <Busca  email={true}  conteudo="Digite seu E-mail" legenda="E-mail" />
        {/* <p className={styles.container_formulario_aviso}>{enviado}</p> */}
      </div>
    </section>

  )
}
