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
  const [valorCartao, setValorCartao] = useState(card.valor)
  const { aberto, setAberto, handleAdicionaItemNoFavoritoFirebase } = useContext(FavoritoContext)
  const { handleAdicionaItemNoCarrinhoFirebase } = useContext(CarrinhoContext)
  const { valorAdicional, setValorFinalDoCard, valorFinalDoCard, setValorAdicional,setValorDoCartaoSelecionado } = useContext(ModalCardContext)



  useEffect(() => {

    if (valorAdicional > card.valor) {
      setValorCartao(valorAdicional)
      setValorFinalDoCard(valorAdicional)
    } else if (valorCartao > valorAdicional && valorAdicional > 0) {
      setValorCartao(card.valor)
      setValorFinalDoCard(card.valor)
    }
  }, [valorAdicional, valorFinalDoCard])

  useEffect(() => {
    setValorFinalDoCard(valorCartao);
  }, [valorCartao])

  //!_____________________Comecando aqui a alteracao__________0
  /*   if(!aberto){
       document.body.style.overflow = 'hidden';
     }else{
        document.body.style.overflow = 'auto'; 
     }
  */
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
                      onClickFavorito={() => handleAdicionaItemNoFavoritoFirebase(card)}
                      onClickCarrinho={() => handleAdicionaItemNoCarrinhoFirebase(card)}
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


