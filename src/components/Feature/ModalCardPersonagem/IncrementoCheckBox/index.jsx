import styles from "./IncrementoCheckBox.module.scss"
import React, { useContext, useEffect, useState } from 'react';
import dados from "../../../../assets/json/dados.json"
import { ModalCardContext } from "../../../../common/context/ModalCard";


export default function IncrementoCheckBox({ card }) {

  const { setCartaoSelecionado,handleAdicionalDeItens } = useContext(ModalCardContext);

  useEffect(() => {
    if (card) {
      setCartaoSelecionado(card)
    }
  }, [])


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
              onChange={handleAdicionalDeItens}
            />
            <label htmlFor="corpoBase">Corpo Base</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="olhos"
              name="traits"
              value="Olhos"
              onChange={handleAdicionalDeItens}
            />
            <label htmlFor="olhos">Olhos</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="boca"
              name="traits"
              value="Boca"
              onChange={handleAdicionalDeItens}
            />
            <label htmlFor="boca">Boca</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="oculos"
              name="traits"
              value="Óculos"
              onChange={handleAdicionalDeItens}
            />
            <label htmlFor="oculos">Óculos</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="capaceteChapeu"
              name="traits"
              value="Capacete/Chapéu"
              onChange={handleAdicionalDeItens}
            />
            <label htmlFor="capaceteChapeu">Chapéu</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="camiseta"
              name="traits"
              value="Camiseta"
              onChange={handleAdicionalDeItens}
            />
            <label htmlFor="camiseta">Camiseta</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="jaqueta"
              name="traits"
              value="Jaqueta"
              onChange={handleAdicionalDeItens}
            />
            <label htmlFor="jaqueta">Jaqueta</label>
          </div>

          <div className={styles.container_formulario_fieldset_checkbox}>
            <input
              type="checkbox"
              id="piercings"
              name="traits"
              value="Piercings"
              onChange={handleAdicionalDeItens}
            />
            <label htmlFor="piercings">Piercings</label>
          </div>
        </fieldset>
      </form>
    </section>

  );
}

