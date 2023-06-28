import React, { useState } from 'react';
import styles from './PaginaTeste.module.scss';
import AbModal from "../../components/Modais/Modal"
import imagem from "../../assets/images/personagem/raposas/fox4.png";
import BotaoGeral from "../../components/BotãoGeral"
import moeda150 from "../../components/Decks/image/150.png"
import dados from "../../assets/json/dados.json"

export default function PaginaTeste() {

const raposa = dados.Goblins;
console.log(raposa[0].valor)

  const [deslocamentoSombraX, setDeslocamentoSombraX] = useState(4);
  const [deslocamentoSombraY, setDeslocamentoSombraY] = useState(4);
  const [intensidadeSombra, setIntensidadeSombra] = useState("");

  /*   const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const offsetX = clientX / window.innerWidth;
      const offsetY = clientY / window.innerHeight;
  
      setIntensidadeSombra(offsetX);
      setDeslocamentoSombraX(offsetX * -10);
      setDeslocamentoSombraY(offsetY * 10);
    }  */

  function handleSubmit(event) {
    event.preventDefault()
    console.log("teste")
  }


  return (
    <div className={styles.container_modal}  /* onMouseMove={handleMouseMove} */ >
      <AbModal aberta={true}  >
        <div className={styles.container}>
          <div className={styles.container_imagem}>
          <img
            className={`${styles.container_imagem_personagem} ${styles.dropShadow}`}
            src={imagem}
            alt="Imagem"

            style={{
              filter: `drop-shadow(${deslocamentoSombraX}px ${deslocamentoSombraY}px 5px rgba(0, 0, 0, ${intensidadeSombra}))`
            }}
          />
          </div>

          <div className={styles.informacoes}>

            <h1 className={styles.titulo}>Arte NFT para Coleções</h1>

            <h2 className={styles.nome_do_personagem}>Codificador CodeFox</h2>

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
                  <input type="checkbox" id="corpoBase" name="traits" value="Corpo Base" />
                  <label htmlFor="corpoBase">Corpo Base</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input type="checkbox" id="olhos" name="traits" value="Olhos" />
                  <label htmlFor="olhos">Olhos</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input type="checkbox" id="boca" name="traits" value="Boca" />
                  <label htmlFor="boca">Boca</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input type="checkbox" id="oculos" name="traits" value="Óculos" />
                  <label htmlFor="oculos">Óculos</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input type="checkbox" id="capaceteChapeu" name="traits" value="Capacete/Chapéu" />
                  <label htmlFor="capaceteChapeu">Chapéu</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input type="checkbox" id="camiseta" name="traits" value="Camiseta" />
                  <label htmlFor="camiseta">Camiseta</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input type="checkbox" id="jaqueta" name="traits" value="Jaqueta" />
                  <label htmlFor="jaqueta">Jaqueta</label>
                </div>
                <div className={styles.container_formulario_checkbox_item}>
                  <input type="checkbox" id="piercings" name="traits" value="Piercings" />
                  <label htmlFor="piercings">Piercings</label>
                </div>
              </div>

              <div className={styles.separador}>
                <div className={styles.container_formulario_valor}>

                  <h2 className={styles.container_formulario_valor_numero}>150</h2>
                  <img src={moeda150} alt="" />
                </div>

                <BotaoGeral value={"Enviar"} tipo={"submit"} onClick={handleSubmit} texto={"Adicionar ao Carrinho"}>
                </BotaoGeral>
              </div>
            </form>




          </div>

        </div>
      </AbModal>
    </div>
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