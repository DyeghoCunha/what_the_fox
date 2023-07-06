import React from 'react'
import styles from './ContainerRgbFlex.module.scss'

export default function ContainerRGBFlex({ aprovado,children}) {
  let color1, color2, color3;

  if (aprovado) {
    color1 = 'rgba(0, 255, 255, 1)';
    color2 = 'rgba(0, 255, 128, 1)';
    color3 = 'rgba(255, 255, 0, 1)';
  } else {
    color1 = 'rgba(255, 0, 0, 1)';
    color2 = 'rgba(242, 0, 118, 1)';
    color3 = 'rgba(255, 255, 255, 0.5)';
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_conteudo}>
        {children}
      </div>
      <span className={styles.container_span}><i style={{ background: `linear-gradient(${color1}, ${color2}, ${color3})` }}></i></span>
    </div>
  )
}
