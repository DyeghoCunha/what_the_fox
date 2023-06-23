import VanillaTilt from "vanilla-tilt";
import styles from "./CardBase3d.module.scss"


import React, { useEffect, useRef } from 'react'

export default function CardBase3d({ children, inclinacao = 35, velocidade = 5000, brilhoOn = true, reverse = false, segueMouse = false, brilho = 1.5 }) {
  const tiltRef = useRef(null);



  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: inclinacao,
        speed: velocidade,
        glare: brilhoOn,
        reverse: reverse,
        "full-page-listening": segueMouse,
        'max-glare': brilho
      });
    }
  }, []);



  return (
    <div className={`${styles.container} tilt`} ref={tiltRef}>
      {children}
    </div>
  );
};

