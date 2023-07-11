import React from 'react';
import styles from './CardMain.module.scss';
import CardAzul from './CardAzul';
import CardVerde from './CardVerde';
import CardPremiunVerde from './CardPremiunVerde';
import CardPremiunAzul from './CardPremiunAzul';
import CardEt from './CardEt'
import CardPraia from './CardPraia';
import CardOffice from './CardOffice';

const CardMain = ({ id, type, nome, frase, imagem }) => {

  return (
    <section className={styles.container}>

     {type === 'CardBusca' && (
        <CardPremiunVerde frase={frase} imagem={imagem} nome={nome} key={id} />
      )}
 
      {type === 'CardAzul' && (
        <CardAzul frase={frase} imagem={imagem} nome={nome} key={id} />
      )}

      {type === 'CardPraia' && (
        <CardPraia imagem={imagem} nome={nome} key={id} />
      )}
      {type === 'CardOffice' && (
        <CardOffice frase={frase} imagem={imagem} nome={nome} key={id} />
      )}

      {type === 'CardPremiunAzul' && (
        <CardPremiunAzul frase={frase} imagem={imagem} nome={nome} key={id} />
      )}

      {type === 'CardVerde' && (
        <CardVerde frase={frase} imagem={imagem} nome={nome} key={id} />
      )}

      {type === 'CardPremiunVerde' && (
        <CardPremiunVerde frase={frase} imagem={imagem} nome={nome} key={id} />
      )}

      {type === 'CardEt' && (
        <CardEt frase={frase} imagem={imagem} nome={nome} key={id} />
      )}

    </section>
  );
};

export default CardMain;
