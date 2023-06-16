import React from 'react'
import styles from './Deck.module.scss'
import CardVerde from '../Card/CardVerde'
import imagem1 from '../../assets/images/card2/personagem1.png'
import imagem2 from '../../assets/images/card2/personagem2.png'
import imagem3 from '../../assets/images/card2/personagem3.png'
import imagem4 from '../../assets/images/card2/personagem4.png'
import imagem5 from '../../assets/images/card2/personagem5.png'
import imagem6 from '../../assets/images/card2/personagem6.png'

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


  return (
    <section className={styles.container}>
<CardVerde frase={fraze1} imagem={imagem1} nome={nome1} />
<CardVerde frase={fraze2} imagem={imagem2} nome={nome2} />
<CardVerde frase={fraze3} imagem={imagem3} nome={nome3} />
<CardVerde frase={fraze4} imagem={imagem4} nome={nome4} />
<CardVerde frase={fraze5} imagem={imagem5} nome={nome5} />
<CardVerde frase={fraze6} imagem={imagem6} nome={nome6} />
    </section>
  )
}
