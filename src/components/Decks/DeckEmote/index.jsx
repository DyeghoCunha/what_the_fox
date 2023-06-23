import React from 'react'
import CardEmote from '../../Card/CardMain/CardEmote'

import styles from "./DeckEmote.module.scss"

export default function DeckEmotes({tribo}) {



  return (
<>
<section className={styles.container}>
{tribo.map((card) => ( 

  <CardEmote card={card}/>

))}
</section>
</>
  )
}
