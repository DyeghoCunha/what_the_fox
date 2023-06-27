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

export default function Footer() {
  const videoRef = useRef(null);


  return (
    <section className={styles.container}>

      <div className={styles.artista}>
        <video ref={videoRef} className={styles.camada1} autoPlay loop muted>
          <source src={videoChinno} type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video>

        <img className={styles.camada2} src={fotoChinno} alt="" />

        <div className={styles.midias}>

          <img className={styles.logo} src={logoChinno} alt="" />

          <div className={styles.contato}>

            <div className={styles.icone_container}>

              <a href="https://www.instagram.com/chinnoferreira/" target="_blank"><BsInstagram className={styles.icone} /></a>
              <a href="https://www.linkedin.com/in/chinno-ferreira-09b66157/" target="_blank"><BsLinkedin className={styles.icone} /></a>
              <a href="" target="_blank"><BsWhatsapp className={styles.icone} /></a>

            </div>



          </div>
        </div>
      </div>

      <div className={styles.artista}>

        <video ref={videoRef} className={styles.camada3} autoPlay loop muted>
          <source src={videoArcano1} type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video>

        {/*   <video ref={videoRef} className={styles.camada2} autoPlay loop muted>
          <source src={videoArcano2} type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video> */}



        <div className={styles.midias}>

          <img className={styles.logo} src={logoArcano} alt="" />

          <div className={styles.contato}>

            <div href="https://www.google.com" className={styles.icone_container}>

              <a href="https://www.instagram.com/chinnoferreira/" target="_blank"><BsInstagram className={styles.icone} /></a>
              <a href="https://www.linkedin.com/in/chinno-ferreira-09b66157/" target="_blank"><BsLinkedin className={styles.icone} /></a>
              <a href="" target="_blank"><BsWhatsapp className={styles.icone} /></a>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.formulario_container}>


        <h2 className={styles.chamada}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <strong href="/modal" className={styles.strong}>Cadastre-se!</strong> </h2>
        
        <div className={styles.formulario}>
          <Busca conteudo="Digite seu E-mail" legenda="E-mail"/>
        </div>

        
      </div>


        <div className={styles.direitosAutorais}>
          <h2>2023 © Desenvolvido por <strong>Dyegho Cunha</strong> | Projeto fictício sem fins comerciais.</h2>
        </div>

    </section>
  )
}
