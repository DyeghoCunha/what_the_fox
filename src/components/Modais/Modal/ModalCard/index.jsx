import React, { useContext, useEffect, useState } from 'react';
import styles from './ModalCard.module.scss';
import AbModal from ".."

import BotaoGeral from "../../../BotãoGeral"
import moeda150 from "../../../../components/Decks/image/150.png"
import dados from "../../../../assets/json/dados.json"
import { FavoritoContext } from '../../../../common/context/Favoritos';

export default function ModalCard({ card, aberta }) {

  const { aberto } = useContext(FavoritoContext)


  //!_________VER OS VALORES QUE SERAM RECEBIDOS 

  const raposa = dados.Goblins;
  const props = raposa[0].valor



  console.log("Card Selecionado:", card)


  //*__________Inicio da Sombra__________________________________________
  const [deslocamentoSombraX, setDeslocamentoSombraX] = useState(40);
  const [deslocamentoSombraY, setDeslocamentoSombraY] = useState(40);
  const [intensidadeSombra, setIntensidadeSombra] = useState("");

/*   const handleMouseMove = (event) => {

    event.preventDefault()
    const { clientX, clientY } = event;
    const offsetX = clientX / window.innerWidth;
    const offsetY = clientY / window.innerHeight;

    setIntensidadeSombra(offsetX);
    setDeslocamentoSombraX(offsetX * -20);
    setDeslocamentoSombraY(offsetY * 20);
  }
 */
  //*__________Fim da Sombra__________________________________________

  function handleSubmit(event) {
    event.preventDefault()
  }
  //*____________ Inicio de soma dos Valores___________________________________________________________________
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

  //*____________ Final de soma dos Valores___________________________________________________________________

  return (


    <AbModal aberta={aberto}>
      <div className={styles.container_modal} /* onMouseMove={handleMouseMove} */  >
        <div className={styles.container}>
          <div className={styles.container_imagem}>
            <img
              className={`${styles.container_imagem_personagem} ${styles.dropShadow}`}
              src={card.imagem}
              alt="Imagem"

              style={{
                filter: `drop-shadow(${deslocamentoSombraX}px ${deslocamentoSombraY}px 5px rgba(0, 0, 0, ${intensidadeSombra}))`
              }}
            />
            <h2 className={styles.nome_do_personagem}>{card.nome}</h2>
          </div>

          <div className={styles.informacoes}>

            <h1 className={styles.titulo}>Arte NFT para Coleções</h1>
            <h3 className={styles.titulo_lista}>O que você receberá</h3>
            <ul className={styles.container_lista}>
              <li>Arquivo de origem PSD separado em camadas.</li>
              <li>Cada elemento em um arquivo PNG com fundo transparente.</li>
              <li>Resolução de 2000x2000px, 300 dpi.</li>
            </ul>
            <form id='formuilario1' className={styles.container_formulario}>
              <h2 className={styles.subtitulo}>Incremente o sua Arte</h2>
              <div className={styles.container_formulario_checkbox}>
                <div className={styles.container_formulario_checkbox_item}>
                  <input
                    type="checkbox"
                    id="corpoBase"
                    name="traits"
                    value="Corpo Base"

                    onChange={handleChange}
                  />
                  <label htmlFor="corpoBase">Corpo Base</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input
                    type="checkbox"
                    id="olhos"
                    name="traits"
                    value="Olhos"

                    onChange={handleChange}
                  />
                  <label htmlFor="olhos">Olhos</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input
                    type="checkbox"
                    id="boca"
                    name="traits"
                    value="Boca"

                    onChange={handleChange}
                  />
                  <label htmlFor="boca">Boca</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input
                    type="checkbox"
                    id="oculos"
                    name="traits"
                    value="Óculos"

                    onChange={handleChange}
                  />
                  <label htmlFor="oculos">Óculos</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input
                    type="checkbox"
                    id="capaceteChapeu"
                    name="traits"
                    value="Capacete/Chapéu"

                    onChange={handleChange}
                  />
                  <label htmlFor="capaceteChapeu">Chapéu</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input
                    type="checkbox"
                    id="camiseta"
                    name="traits"
                    value="Camiseta"

                    onChange={handleChange}
                  />
                  <label htmlFor="camiseta">Camiseta</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input
                    type="checkbox"
                    id="jaqueta"
                    name="traits"
                    value="Jaqueta"

                    onChange={handleChange}
                  />
                  <label htmlFor="jaqueta">Jaqueta</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input
                    type="checkbox"
                    id="piercings"
                    name="traits"
                    value="Piercings"

                    onChange={handleChange}
                  />
                  <label htmlFor="piercings">Piercings</label>
                </div>
              </div>

              <div className={styles.separador}>
                <div className={styles.container_formulario_valor}>
                  <h2 className={styles.container_formulario_valor_numero}>{valorFinal}</h2>
                  <img src={moeda150} alt="" />
                </div>
                <div className={styles.teste}>
                  <BotaoGeral value={"Enviar"} tipo={"submit"} onClick={handleSubmit} texto={"Adicionar ao Carrinho"}>
                  </BotaoGeral>
                </div>

              </div>
            </form>




          </div>

        </div>
      </div>
    </AbModal>

  );
}






/* 

    if (offsetX < 0.5 && offsetY < 0.5) {
      console.log("Q1")

      setShadowOffsetX((offsetX + 0.5)*  sombra);
      setShadowOffsetY((offsetY + 0.5) *  sombra);
    }
   
    if (offsetX >= 0.5 && offsetY < 0.5) {
      console.log("Q2")
      setShadowOffsetX(offsetX * - sombra);
      setShadowOffsetY(offsetY * - sombra);
    }

    if (offsetX < 0.5 && offsetY >= 0.5) {
      console.log("Q3")
      setShadowOffsetX((offsetX + 1) * - sombra);
      setShadowOffsetY(offsetY * - sombra);
    }
    if (offsetX >= 0.5 && offsetY >= 0.5) {
      console.log("Q4")
      setShadowOffsetX((offsetX + 1) * sombra);
      setShadowOffsetY(offsetY * - sombra);
    }
 
 */