import styles from "./Footer.module.scss"
import React, { useRef } from 'react'
import videoChinno from "./image/bannerFooterNN_video.mp4"
import fotoChinno from "./image/bannerFooterNN_foto.png"
import logoChinno from "./image/logoChinno.png"
import videoArcano1 from "./image/bannerFooterAC_video1.mp4"
import videoArcano2 from "./image/bannerFooterAC_video2.mp4"
import logoArcano from "./image/logoArcano.png"

import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Busca from "../Cabecalho/Busca"
import QuadroDeArtes from "./QuadroDeArtes"
import ContatoArtista from "./ContatoArtista"
import Artista from "./Artista"
import NewsLetter from "./NewsLetter"


export default function Footer() {



  return (
    <footer className={styles.container}>
      <Artista foto={fotoChinno}
        video={videoChinno}
        linkInsta={"https://www.instagram.com/chinnoferreira/"}
        linkLikDin={"https://www.linkedin.com/in/chinno-ferreira-09b66157/"}
        linkWapp={""}
        logo={logoChinno} />

      <Artista video={videoArcano1}
        logo={logoArcano}
        linkLikDin={"https://www.linkedin.com/in/arcanoferreira/"}
        linkInsta={"https://www.instagram.com/arcanoferreira/"}
        linkWapp={""} />

      <div className={styles.container_formulario}>
        <NewsLetter />
      </div>

      <div className={styles.container_direitos}>
        <h2 className={styles.container_direitos_titulo}>2023 © Desenvolvido por <strong className={styles.container_direitos_titulo_realce}>Dyegho Cunha</strong> | Projeto fictício sem fins comerciais.</h2>
      </div>
    </footer>

   
  )
}
