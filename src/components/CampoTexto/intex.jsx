
import styles from "./CampoTexto.module.scss"



import React from 'react';

export default function CampoTexto({ label, value, onChange, placeholder=label , type ="text"}) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input type={type} value={value} onChange={ event => onChange(event.target.value)} placeholder={placeholder}/>
    </div>
  );
}