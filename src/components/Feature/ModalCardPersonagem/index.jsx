import React, { useContext, useEffect, useState } from 'react';
import styles from './ModalCardPersonagem.module.scss';

import { FavoritoContext } from '../../../common/context/Favoritos';
import IncrementoCheckBox from "./IncrementoCheckBox"
import Informativo from './Informativo';
import FotoCard from './FotoCard';
import CardValor from './CardValor';
import BotoesDoModalCard from './BotoesDoModalCard';

import BotaoNeomorph from '../../BotaoNeomorph';
import { faCartPlus, faHeartCirclePlus, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalCardContext } from '../../../common/context/ModalCard';
import { CarrinhoContext } from '../../../common/context/Carrinho';


export default function ModalCardPersonagem({ card, aberta }) {
  const {valorCartao, setValorCartao} = useContext(ModalCardContext) 
  const { aberto, setAberto,cardModal, handleAdicionaItemNoFavoritoFirebase } = useContext(FavoritoContext)
  const { handleAdicionaItemNoCarrinhoFirebase } = useContext(CarrinhoContext)
  const { valorAdicional, setValorFinalDoCard, valorFinalDoCard, setValorAdicional,setValorDoCartaoSelecionado } = useContext(ModalCardContext)


useEffect(()=>{
  setValorCartao(cardModal.valor)
},[cardModal])


useEffect(()=>{
      setValorFinalDoCard(0)
    setValorAdicional(0)
    setValorDoCartaoSelecionado(0)
},[valorCartao])

  useEffect(() => {

    if (valorAdicional > valorCartao) {
      setValorCartao(valorAdicional)
      setValorFinalDoCard(valorAdicional)
    } else if (valorCartao > valorAdicional && valorAdicional > 0) {
      setValorCartao(valorCartao)
      setValorFinalDoCard(valorCartao)
    }
  }, [valorAdicional, valorFinalDoCard])

  useEffect(() => {
    setValorFinalDoCard(valorCartao);
  }, [valorCartao])


  const handleFechar = () => {
    setAberto(prev => !prev)
    setValorFinalDoCard(0)
    setValorAdicional(0)
    setValorDoCartaoSelecionado(0)
    setValorCartao(0)
  }

  return (
    <>
      {aberto && (
        <section className={styles.modal}>
          <section className={styles.container}>
            <div className={styles.container_botaoFechar}>
              <BotaoNeomorph onClick={handleFechar} botaoModal={true}><FontAwesomeIcon icon={faRectangleXmark} /></BotaoNeomorph>
            </div>
            <section className={styles.container_personagem} >
              <div className={styles.container_personagem_informativo}>
                <Informativo />
                <IncrementoCheckBox card={card} />
              </div>
              <section className={styles.container_personagem_foto}>
                <FotoCard card={card} />
                <div className={styles.container_personagem_compras}>
                  <CardValor valor={valorFinalDoCard > card.valor ? valorFinalDoCard : card.valor } />
                  <div className={styles.container_personagem_compras_botoes}>
                    <BotoesDoModalCard
                      onClickIcone1={() => handleAdicionaItemNoFavoritoFirebase(card)}
                      onClickIcone2={() => handleAdicionaItemNoCarrinhoFirebase(card)}
                      icone1={<FontAwesomeIcon icon={faHeartCirclePlus} />}
                      icone2={<FontAwesomeIcon icon={faCartPlus} />}
                    />
                  </div>
                </div>
              </section>
            </section>
          </section>
        </section>
      )}

    </>

  );
}


