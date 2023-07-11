import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from './FotoCard.module.scss';
import dados from "../../../../assets/json/dados.json"
import { FavoritoContext } from '../../../../common/context/Favoritos';

export default function FotoCard({ card , sombra=true}) {
  const [deslocamentoSombraX, setDeslocamentoSombraX] = useState(40);
  const [deslocamentoSombraY, setDeslocamentoSombraY] = useState(40);
  const [intensidadeSombra, setIntensidadeSombra] = useState("");

  const raposa = dados.Raposas
  const props = raposa[0]

  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const offsetX = clientX / window.innerWidth;
    const offsetY = clientY / window.innerHeight;
    if(sombra){
      setIntensidadeSombra(offsetX);
    setDeslocamentoSombraX(offsetX * -20);
    setDeslocamentoSombraY(offsetY * 20);
    }else{
            setIntensidadeSombra(0);
    setDeslocamentoSombraX(0);
    setDeslocamentoSombraY(0);
    }
    
  }

  const imagemStyle = useMemo(() => ({
    filter: `drop-shadow(${deslocamentoSombraX}px ${deslocamentoSombraY}px 5px rgba(0, 0, 0, ${intensidadeSombra}))`
  }), [deslocamentoSombraX, deslocamentoSombraY, intensidadeSombra]);

  return (
    <div className={styles.container}  onMouseMove={handleMouseMove}>
      <div className={styles.container_personagem}>
        <img
          className={`${styles.container_personagem_foto} ${styles.dropShadow}`}
          src={card.imagem}
          alt="Imagem"
          style={imagemStyle}
        />
        <h2 className={styles.container_personagem_nome}>{card.nome}</h2>
      </div>
    </div>
  );
}
