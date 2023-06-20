import React, {  useRef } from 'react';
import styles from './BannerVideoFoto.module.scss';

export default function BannerVideoFoto({video,imagem}) {
  const videoRef = useRef(null);

  return (
    <section className={styles.banner_container}>
      <div className={styles.video_container}>
        <video ref={videoRef} className={styles.video} autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video>
      </div>

      <div className={styles.foto_container}>
        <div
          className={styles.imagem_backGround}
          style={{ backgroundImage: `url(${imagem})` }}
        ></div>
      </div>
    </section>
  );
}
