
import React, { useState } from 'react';

import styles from "./Busca.module.scss"

export default function Busca({ legenda = "Buscar", onBusca, conteudo = "Digite sua busca"}) {

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
        placeholder= {conteudo}
        value={termoBusca}
        onChange={handleChange}
        className={styles.input}
      />
      <div className={styles.botao_container} >
        <button className={styles.botao} type="submit">{legenda}</button>
      </div>
    </form>
  );
}