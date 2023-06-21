import React, { useContext, useRef } from 'react';
import styles from './BannerVideoFoto.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Bolinha from '../Bolinhas';
import Paginacao from './Paginacao';
import { BannerContext } from '../../../common/context/Banner';



export default function BannerVideoFoto({ video, imagem }) {
  const videoRef = useRef(null);

  const { proximo, setProximo } = useContext(BannerContext)

  function handleClickProximo() {
    if (proximo < 3 && proximo >= 0) {
      setProximo(prev => prev + 1)
    }else{
      setProximo(1)
  }
  }
   function handleClickVoltar() {
    if (proximo <= 3 && proximo > 1) {
      setProximo(prev => prev -1)
    }else{
      setProximo(3)
  }
   }

  return (
    <section className={styles.banner_container}>

      <button onClick={handleClickProximo} className={`${styles.botao_container} ${styles.avancar}`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <button onClick={handleClickVoltar} className={`${styles.botao_container} ${styles.voltar}`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className={styles.bolinhas}>
        <Paginacao atual={proximo} />
      </div>

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
