import React, { useEffect, useRef, useState } from 'react';


import styles from './CardMain.module.scss';

import CardAzul from '../CardAzul';
import CardVerde from './CardVerde';
import CardPremiunVerde from './CardPremiunVerde';
import CardPremiunAzul from './CardPremiunAzul';
import CardEt from './CardEt'

const CardMain = ({id,type,nome,frase,imagem}) => {
  
return (
 <>

{type==='CardAzul'&&(
  <CardAzul frase={frase} imagem={imagem} nome={nome} key={id}/>
)}

{type==='CardPremiunAzul'&&(
  <CardPremiunAzul frase={frase} imagem={imagem} nome={nome} key={id}/>
)}

{type==='CardVerde'&&(
  <CardVerde frase={frase} imagem={imagem} nome={nome} key={id}/>
)}

{type==='CardPremiunVerde'&&(
  <CardPremiunVerde frase={frase} imagem={imagem} nome={nome} key={id}/>
)}

{type==='CardEt'&&(
  <CardEt frase={frase} imagem={imagem} nome={nome} key={id}/>
)}






</>
     );
};

export default CardMain;
