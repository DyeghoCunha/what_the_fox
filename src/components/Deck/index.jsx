import React from 'react'
import styles from './Deck.module.scss'

import imagem7 from '../../assets/images/personagem/goblin/goblin11.png'
import imagem1 from '../../assets/images/card1/personagem1.png'
import imagem9 from '../../assets/images/card1/personagem3.png'
import imagem10 from '../../assets/images/card1/personagem4.png'
import imagem11 from '../Card/CardMain/CardEt/image/cardEt/Et.png'
import imagem12 from '../../assets/images/personagem/goblin/goblin11.png'

import CardMain from '../Card/CardMain'

export default function Deck() {
  const nome1 = 'SacertdóTroll'
  const fraze1 = "Com a luz da escuridão, curo as almas feridas e trago esperança aos desesperados."
  const nome2 = 'EncanTroll'
  const fraze2 = "Entre os arcanos proibidos, manipulo as energias ancestrais para moldar a realidade ao meu bel-prazer."
  const nome3 = 'SangrenTroll'
  const fraze3 = "Nas sombras me oculto, e com minha lâmina afiada, sou a morte silenciosa que assombra seus pesadelos."
  const nome5 = 'Grimbrasa'
  const fraze5 = "Com a magia ancestral, manipulo as energias arcanas para desvendar os segredos do universo e controlar as forças da natureza."
  const nome4 = 'MaldiTroll';
  const fraze4 = "Entre as sombras e o caos, meu poder se ergue, trazendo o tormento aos incautos."
  const nome6 = 'Voragolpe'
  const fraze6 = "Com minha ira desmedida, esmago tudo que se opõe ao meu caminho."
  const nome7 = 'InfernoBlade'
  const fraze7 = "Queime no brilho elétrico da minha lâmina infernal!"
  const nome11 = "Xeltron"

  return (
    <section className={styles.container}>

 <CardMain type={'CardPremiunAzul'} nome={'Flipestilquesn'} imagem={imagem1} frase={fraze6}/> 
      
    </section>
  )
}
