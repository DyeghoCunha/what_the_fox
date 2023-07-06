
import styles from "./CampoTexto.module.scss"
import { GrFormViewHide , GrFormView } from "react-icons/gr";



import React, { useState } from 'react';

export default function CampoTexto({ label, value, onChange, placeholder = label, type = "text", senha=false}) {
  
  const [escondeSenha , setEscondeSenha] = useState(true)

  const handleEscondeSenha = (event)=>{
    event.preventDefault()
setEscondeSenha(prev => !prev) 
  }


  return (
    <>

       {senha  && (
        <div className={styles.container}>
          <label>{label}</label>
          <input type={escondeSenha? "password": "text"} value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder} />

            <button onClick={handleEscondeSenha} className={styles.container_escondeSenha}>{escondeSenha?<GrFormView/>:<GrFormViewHide/>}</button>
        </div>
      )}
      {!senha  && (
        <div className={styles.container}>
          <label>{label}</label>
          <input type={type} value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder} />
        </div>
      )}

    </>
  );
}