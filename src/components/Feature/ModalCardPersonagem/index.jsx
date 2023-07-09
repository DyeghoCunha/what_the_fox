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
import { ModalCardContext } from '../../../common/context/ModalCard';
import { CarrinhoContext } from '../../../common/context/Carrinho';


export default function ModalCardPersonagem({ card, aberta }) {
  const [valorCartao, setValorCartao] = useState(card[0].valor)
  const { aberto, setAberto, handleAdicionaItemNoFavoritoFirebase } = useContext(FavoritoContext)
  const { handleAdicionaItemNoCarrinhoFirebase } = useContext(CarrinhoContext)
  const { valorAdicional, setValorFinalDoCard, } = useContext(ModalCardContext)

  useEffect(() => {
    setValorFinalDoCard(valorCartao);
  }, [valorCartao])


  useEffect(() => {

    if (valorAdicional >= valorCartao) {
      setValorCartao(valorAdicional)
      setValorFinalDoCard(valorAdicional)
    } else if (valorCartao > valorAdicional && valorAdicional > 0) {
      setValorCartao(valorAdicional)
      setValorFinalDoCard(valorAdicional)
    }
  }, [valorAdicional])


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
            <BotaoNeomorph botaoModal={true}><FontAwesomeIcon icon={faRectangleXmark} /></BotaoNeomorph>
          </div>
          <section className={styles.container_personagem} >
            <div className={styles.container_personagem_informativo}>
              <Informativo />
              <IncrementoCheckBox card={card[0]} />
            </div>
            <section className={styles.container_personagem_foto}>
              <FotoCard />
              <div className={styles.container_personagem_compras}>
                <CardValor valor={valorCartao} />
                <div className={styles.container_personagem_compras_botoes}>
                  <BotoesDoModalCard
                    onClickFavorito={() => handleAdicionaItemNoFavoritoFirebase(card[1])}
                    onClickCarrinho={() => handleAdicionaItemNoCarrinhoFirebase(card[2])}
                  />

                </div>
              </div>
            </section>
          </section>
        </section>
      )}

    </>

  );
}


