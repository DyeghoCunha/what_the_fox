import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './BannerPaginaInicial.module.scss';
import videoRaposa from "../../../assets/Banner/bannerPaginaInicial.mp4";
import { BannerContext } from '../../../common/context/Banner';

export default function BannerPaginaInicial() {
  const videoRef = useRef(null);

  const { videoFim, setVideoFim } = useContext(BannerContext)

  useEffect(() => {
    const videoElement = videoRef.current;
    const handleVideoEnded = () => {

      videoElement.currentTime = 0;
      videoElement.play();
      setVideoFim(prev => prev + 1)
    };

    videoElement.addEventListener('ended', handleVideoEnded);
    return () => {

    videoElement.removeEventListener('ended', handleVideoEnded);

    };
  }, [videoFim]);

  return (
    <section className={styles.banner_container}>

      <div className={styles.video_container}>
        <video ref={videoRef} className={`${videoFim > 0 ? styles.video_small : styles.video} `} autoPlay muted>
          <source src={videoRaposa} type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video>
      </div>



    </section>
  );
}
