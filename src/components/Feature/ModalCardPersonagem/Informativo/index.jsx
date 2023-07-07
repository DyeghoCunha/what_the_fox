import styles from "./Informativo.module.scss"
import React from 'react'


export default function Informativo() {



  return (


    <section className={styles.container}>
      <article className={styles.container_informacoes}>
        <h1 className={styles.container_informacoes_titulo}>Arte NFT para Coleções</h1>
        <h3 className={styles.container_informacoes_subtitulo}>O que você receberá</h3>
        <ul className={styles.container_informacoes_lista}>
          <li>Arquivo de origem PSD separado em camadas.</li>
          <li>Cada elemento em um arquivo PNG com fundo transparente.</li>
          <li>Resolução de 2000x2000px, 300 dpi.</li>
        </ul>
      </article>
    </section>




  );
}

