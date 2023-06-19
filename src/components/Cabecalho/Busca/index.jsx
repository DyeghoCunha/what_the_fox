
import React, { useState } from 'react';

import styles from "./Busca.module.scss"

export default function Busca({ onBusca }) {

  const [termoBusca, setTermoBusca] = useState('');

  const handleChange = (event) => {
    setTermoBusca(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBusca(termoBusca);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite sua busca"
        value={termoBusca}
        onChange={handleChange}
        className={styles.input}
      />
      <div className={styles.botao_container} >
      <button className={styles.botao} type="submit">Buscar</button>
      </div>
    </form>
  );
}