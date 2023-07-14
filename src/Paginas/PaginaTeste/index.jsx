import React, { useContext } from 'react';

import styles from "./PaginaTeste.module.scss"
import dados from "../../assets/json/dados.json"
import { FirebaseContext } from '../../common/context/FirebaseConfig';
import { FavoritoContext } from '../../common/context/Favoritos';
import ModalCardPersonagem from '../../components/Feature/ModalCardPersonagem';
import BotoesDoModalCard from '../../components/Feature/ModalCardPersonagem/BotoesDoModalCard';
import Produtos from '../../components/Produtos';
import BoasVindasCard from '../../components/Modais/ModalLoginFirebase/BoasVindasCard';





export default function PaginaTeste() {


  const { foxDb, goblinDb, apesDb, bladeMasterDb, hempDb, emoteDb, } = useContext(FirebaseContext)
  const { cardModal } = useContext(FavoritoContext)


  return (

    <>
      <div className={styles.container_paginaTeste}>
        
      <BoasVindasCard/> 



      </div>
    </>

  )

}





