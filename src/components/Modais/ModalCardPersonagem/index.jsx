import React, { useContext, useEffect, useState } from 'react';
import styles from './ModalCardPersonagem.module.scss';


import BotaoGeral from "../../BotãoGeral"
import moeda150 from "../../../components/Decks/image/150.png"
import dados from "../../../assets/json/dados.json"
import { FavoritoContext } from '../../../common/context/Favoritos';
import IncrementoCheckBox from "../../Feature/ModalCardPersonagem/IncrementoCheckBox"
import Informativo from '../../Feature/ModalCardPersonagem/Informativo';
import FotoCard from '../../Feature/ModalCardPersonagem/FotoCard';

export default function ModalCard({ card, aberta }) {

  const { aberto } = useContext(FavoritoContext)

  const raposa = dados.Goblins;
  const props = raposa[0].valor
  function handleSubmit(event) {
    event.preventDefault()
  }


  const [adicional, setAdicional] = useState(props);
  const [adicionalTotal, setAdicionalTotal] = useState(0);
  const [valorFinal, setValorFinal] = useState(0)


  return (



    <div className={styles.container} >

      <div className={styles.container_informativo}>
        <Informativo />
        <IncrementoCheckBox card={card} />
      </div>
      <div className={styles.container_foto}>

        <FotoCard />

        <div className={styles.container_compras}>
          <div className={styles.container_formulario_valor}>
            <h2 className={styles.container_formulario_valor_numero}>{valorFinal}</h2>
            <img src={moeda150} alt="" />
          </div>
          <div className={styles.teste}>
            <BotaoGeral value={"Enviar"} tipo={"submit"} onClick={handleSubmit} texto={"Adicionar ao Carrinho"}>
            </BotaoGeral>
          </div>
        </div>

      </div>
    </div>





  );
}


