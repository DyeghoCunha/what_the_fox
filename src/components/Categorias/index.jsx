import CardCategoria from "./CardCategoria"
import styles from "./Categorias.module.scss"
import React from 'react'
import dados from "../../assets/json/dados.json"
export default function Categorias() {

  const categorias = dados.Categorias;

  return (
    <section className={styles.container}>

      <h1 className={styles.titulo}>Busque por categoria:</h1>
      <div className={styles.card_container}>
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} imagem={categoria.imagem} nome={categoria.nomeCategoria} />
        ))
        }
      </div>
    </section>
  )

}
