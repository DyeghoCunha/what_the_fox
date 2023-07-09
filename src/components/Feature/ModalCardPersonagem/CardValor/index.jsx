import React, { useState } from 'react';
import styles from './CardValor.module.scss';
import moeda150 from "../../../../components/Decks/image/150.png"
import moeda100 from "../../../../components/Decks/image/10.png"
import moeda50 from "../../../../components/Decks/image/50.png"


export default function CardValor({ valor }) {

console.log("ValorMoedas: ", valor)
  let moeda = "";
  if (valor >= 100 && valor < 150) {
    moeda = moeda50;
  } else if (valor < 100) {
    moeda = moeda100
  } else {
    moeda = moeda150
  }
  return (
    <section className={styles.container} >
      <h2 className={styles.container_valor}>{valor}</h2>
      <img className={styles.container_imagem} src={moeda} alt="" />
    </section>

  )
}