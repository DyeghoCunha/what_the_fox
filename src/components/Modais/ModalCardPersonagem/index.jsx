import styles from "./ModalCardPersonagem.module.scss"
import React from 'react'


export default function ModalCardPersonagem() {
 


  return (

      <div className={styles.container_modal} >
        <div className={styles.container}>
         

          <div className={styles.informacoes}>

            <h1 className={styles.titulo}>Arte NFT para Coleções</h1>
            <h3 className={styles.titulo_lista}>O que você receberá</h3>
            <ul className={styles.container_lista}>
              <li>Arquivo de origem PSD separado em camadas.</li>
              <li>Cada elemento em um arquivo PNG com fundo transparente.</li>
              <li>Resolução de 2000x2000px, 300 dpi.</li>
            </ul>

          </div>
        </div>
      </div>
  

  );
}

