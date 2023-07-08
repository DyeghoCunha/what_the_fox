import React, { useContext, useEffect, useState } from 'react';
import styles from './ModalCardPersonagem.module.scss';


import BotaoGeral from "../../BotãoGeral"
import moeda150 from "../../../components/Decks/image/150.png"
import dados from "../../../assets/json/dados.json"
import { FavoritoContext } from '../../../common/context/Favoritos';
import IncrementoCheckBox from "../../Feature/ModalCardPersonagem/IncrementoCheckBox"
import Informativo from '../../Feature/ModalCardPersonagem/Informativo';
import FotoCard from '../../Feature/ModalCardPersonagem/FotoCard';
import CardValor from '../../Feature/ModalCardPersonagem/CardValor';
import BotaoModal from '../../BotaoNeomorph';

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



    <section className={styles.container} >

      <div className={styles.container_informativo}>
        <Informativo />
        <IncrementoCheckBox card={card} />
      </div>

      <section className={styles.container_foto}>
        <FotoCard />
        <div className={styles.container_compras}>
          <CardValor />
          <div className={styles.container_compras_botoes}>
          
          </div>
        </div>

      </section>
    </section>





  );
}


