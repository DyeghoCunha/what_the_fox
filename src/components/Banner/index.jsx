import React, { useContext, useState } from 'react'
import styles from "./Banner.module.scss"
import BannerVideoFoto from './BannerVideoFoto'
import { BannerContext } from '../../common/context/Banner'
import videoRaposa from "../../assets/Banner/bannerPaginaInicial.mp4";
import imagemTrilha from "../../assets/Banner/bannerWTF_FotoTrilha.png";
import imagemTrilha2 from "../../assets/Banner/bannerWTF_sem_video2.png"
import imagemTrilha4 from "../../assets/Banner/bannerWTF_sem_video4.png"
import videoRosto from "../../assets/Banner/BannerWtf4.mp4"
import videoLogo from "../../assets/Banner/BannerWtf3.mp4"
import Paginacao from './BannerVideoFoto/Paginacao';

export default function Banner() {

  const { proximo } = useContext(BannerContext);

  return (

    <section className={styles.container}>


      {proximo === 1 && (
        <div className={styles.show}>
          <BannerVideoFoto video={videoRaposa} imagem={imagemTrilha} />
        </div>
      )}


      {proximo === 2 && (
        <div className={styles.show}>
          <BannerVideoFoto video={videoRosto} imagem={imagemTrilha4} />
        </div>
      )}


      {proximo === 3 && (
        <div className={styles.show}>
          <BannerVideoFoto video={videoLogo} imagem={imagemTrilha2} />
        </div>
      )}
 <div className={styles.bolinhas}>
        <Paginacao atual={proximo} />
      </div>
    </section>



  )
}
