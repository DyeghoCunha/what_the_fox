import styles from "./IncrementoCheckBox.module.scss"
import React, { useContext, useEffect, useState } from 'react';
import dados from "../../../../assets/json/dados.json"


export default function IncrementoCheckBox({ card }) {


  const raposa = dados.Goblins;
  const props = raposa[0].valor

  const values = {
    corpoBase: 50,
    olhos: 10,
    boca: 10,
    oculos: 12,
    capaceteChapeu: 15,
    camiseta: 15,
    jaqueta: 20,
    piercings: 5
  };

  const [adicional, setAdicional] = useState(props);
  const [adicionalTotal, setAdicionalTotal] = useState(0);
  const [valorFinal, setValorFinal] = useState(0)

  useEffect(() => {
    const atualizado = Object.values(adicional).reduce((acc, val) => acc + val, 0);
    setAdicionalTotal(atualizado);
  }, [adicional]);

  const handleChange = (event) => {
    const { id, checked } = event.target;

    setAdicional((prevAdicional) => {
      const updatedAdicional = { ...prevAdicional };

      if (checked) {
        updatedAdicional[id] = values[id];
      } else {
        delete updatedAdicional[id];
      }

      return updatedAdicional;
    });
  };

  useEffect(() => {

    const final = card.valor + adicionalTotal

    setValorFinal(final);
  }, [adicionalTotal]);


  return (
    <section className={styles.container}>
      <form id="formuilario1" className={styles.container_formulario}>
        <h2 className={styles.container_formulario_titulo}>Incremente a sua Arte</h2>
        <fieldset className={styles.container_formulario_fieldset}>
          <legend className={styles.container_formulario_fieldset_legenda}>Opções de Incremento</legend>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="corpoBase"
              name="traits"
              value="Corpo Base"
              onChange={handleChange}
            />
            <label htmlFor="corpoBase">Corpo Base</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="olhos"
              name="traits"
              value="Olhos"
              onChange={handleChange}
            />
            <label htmlFor="olhos">Olhos</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="boca"
              name="traits"
              value="Boca"
              onChange={handleChange}
            />
            <label htmlFor="boca">Boca</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="oculos"
              name="traits"
              value="Óculos"
              onChange={handleChange}
            />
            <label htmlFor="oculos">Óculos</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="capaceteChapeu"
              name="traits"
              value="Capacete/Chapéu"
              onChange={handleChange}
            />
            <label htmlFor="capaceteChapeu">Chapéu</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="camiseta"
              name="traits"
              value="Camiseta"
              onChange={handleChange}
            />
            <label htmlFor="camiseta">Camiseta</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="jaqueta"
              name="traits"
              value="Jaqueta"
              onChange={handleChange}
            />
            <label htmlFor="jaqueta">Jaqueta</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="piercings"
              name="traits"
              value="Piercings"
              onChange={handleChange}
            />
            <label htmlFor="piercings">Piercings</label>
          </div>
        </fieldset>
      </form>
    </section>

  );
}

