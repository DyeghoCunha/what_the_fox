import ContatoArtista from "../ContatoArtista"
import QuadroDeArtes from "../QuadroDeArtes"
import styles from "./Artista.module.scss"
import React from 'react'

export default function Artista({ video, foto, logo, linkInsta, linkLikDin, linkWapp }) {
  return (

    <section className={styles.container}>
      <section className={styles.container_artista}>
        <div className={styles.container_artista_foto}>
          <QuadroDeArtes video={video} imagem={foto} />
        </div>
        <div className={styles.container_artista_contato}>
          <ContatoArtista logo={logo} linkWapp={linkWapp} linkLikDin={linkLikDin}
            linkInsta={linkInsta} />
        </div>
      </section>


    </section >
  )
}
