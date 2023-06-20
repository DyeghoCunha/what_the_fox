import React, { useContext, useState } from 'react'

import BannerVideoFoto from './BannerVideoFoto'
import { BannerContext } from '../../common/context/Banner'
import videoRaposa from "../../assets/Banner/bannerPaginaInicial.mp4";
import imagemTrilha from "../../assets/Banner/bannerWTF_FotoTrilha.png";
import imagemTrilha2 from "../../assets/Banner/bannerWTF_sem_video2.png"
import imagemTrilha4 from "../../assets/Banner/bannerWTF_sem_video4.png"
import videoRosto from "../../assets/Banner/BannerWtf4.mp4"
import videoLogo from "../../assets/Banner/BannerWtf3.mp4"

export default function Banner() {

  const { videoFim, proximo } = useContext(BannerContext);

  return (

    <section>
     
        {/* <BannerPaginaInicial /> */}

      <BannerVideoFoto video={videoRaposa}  imagem={imagemTrilha}/>

 {/*      <BannerVideoFoto video={videoRosto}  imagem={imagemTrilha4}/> 

      <BannerVideoFoto video={videoLogo}  imagem={imagemTrilha2}/>
 */}
    </section>


  )
}
