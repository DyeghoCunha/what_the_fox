import React, { useContext, useEffect, useState } from 'react';
import styles from './ModalCardPersonagem.module.scss';

import dados from "../../../assets/json/dados.json"
import { FavoritoContext } from '../../../common/context/Favoritos';
import IncrementoCheckBox from "./IncrementoCheckBox"
import Informativo from './Informativo';
import FotoCard from './FotoCard';
import CardValor from './CardValor';
import BotoesDoModalCard from './BotoesDoModalCard';

import BotaoNeomorph from '../../BotaoNeomorph';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ModalCardPersonagem({ card, aberta }) {

  const { aberto, setAberto } = useContext(FavoritoContext)

  const raposa = dados.Goblins;
  const props = raposa[0].valor
  function handleSubmit(event) {
    event.preventDefault()
  }
  const handleFechar = () => {
    setAberto(prev => !prev)
  }

  return (
    <>
      {!aberto && (
        <section className={styles.container}>
          <div className={styles.container_botaoFechar}>
            <BotaoNeomorph  botaoModal={true}><FontAwesomeIcon icon={faRectangleXmark} /></BotaoNeomorph>
          </div>
          <section className={styles.container_personagem} >
            <div className={styles.container_personagem_informativo}>
              <Informativo />
              <IncrementoCheckBox card={card} />
            </div>
            <section className={styles.container_personagem_foto}>
              <FotoCard />
              <div className={styles.container_personagem_compras}>
                <CardValor />
                <div className={styles.container_personagem_compras_botoes}>
                  <BotoesDoModalCard />
                </div>
              </div>
            </section>
          </section>
        </section>
      )}

    </>

  );
}


