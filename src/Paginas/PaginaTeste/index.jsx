import React, { useState } from 'react';
import styles from './PaginaTeste.module.scss';
import dados from '../../assets/json/dados.json';
import AbModal from '../../components/Modais/Modal';
import imagem from "../../assets/images/personagem/raposas/fox4.png";
import BotaoGeral from "../../components/BotãoGeral"
export default function PaginaTeste() {
  const goblin = dados.Goblins;


  const [deslocamentoSombraX, setDeslocamentoSombraX] = useState(0);
  const [deslocamentoSombraY, setDeslocamentoSombraY] = useState(0);
  const [intensidadeSombra, setIntensidadeSombra] = useState("");

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const offsetX = clientX / window.innerWidth;
    const offsetY = clientY / window.innerHeight;

    setIntensidadeSombra(offsetX);
    setDeslocamentoSombraX(offsetX * -10);
    setDeslocamentoSombraY(offsetY * 10);
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("teste")
  }


  return (
    <div className={styles.container_modal} onMouseMove={handleMouseMove}>
      <AbModal aberta={true}>
        <div className={styles.container}>
          <img
            className={`${styles.imagem} ${styles.dropShadow}`}
            src={imagem}
            alt="Imagem"

            style={{
              filter: `drop-shadow(${deslocamentoSombraX}px ${deslocamentoSombraY}px 5px rgba(0, 0, 0, ${intensidadeSombra}))`
            }}
          />

          <div className={styles.informacoes}>

            <h4 className={styles.titulo2}>Arte NFT para Coleções</h4>

            <h1 className={styles.titulo}>Titulo</h1>

            <h1>O que você receberá:</h1>

            <ul>
              <li>Arquivo de origem PSD separado em camadas.</li>
              <li>Cada elemento em um arquivo PNG com fundo transparente.</li>
              <li>Resolução de 2000x2000px, 300 dpi para os Traços/Acessórios.</li>

            </ul>

            <form>

              <div>
                <input type="checkbox" id="corpoBase" name="traits" value="Corpo Base" />
                <label htmlFor="corpoBase">Corpo Base</label>

                <input type="checkbox" id="olhos" name="traits" value="Olhos" />
                <label htmlFor="olhos">Olhos</label>

                <input type="checkbox" id="boca" name="traits" value="Boca" />
                <label htmlFor="boca">Boca</label>

                <input type="checkbox" id="oculos" name="traits" value="Óculos" />
                <label htmlFor="oculos">Óculos</label>

                <input type="checkbox" id="capaceteChapeu" name="traits" value="Capacete/Chapéu" />
                <label htmlFor="capaceteChapeu">Capacete/Chapéu</label>

                <input type="checkbox" id="camiseta" name="traits" value="Camiseta" />
                <label htmlFor="camiseta">Camiseta</label>

                <input type="checkbox" id="jaqueta" name="traits" value="Jaqueta" />
                <label htmlFor="jaqueta">Jaqueta</label>

                <input type="checkbox" id="piercings" name="traits" value="Piercings" />
                <label htmlFor="piercings">Piercings</label>
              </div>

              <div>
                <label htmlFor="outrasCaracteristicas">Anything else you can imagine:</label>
                <textarea id="outrasCaracteristicas" name="outrasCaracteristicas" rows="4" cols="50"></textarea>
              </div>

              <BotaoGeral value={"Enviar"} tipo={"submit"}  onClick={handleSubmit} texto={"Adicionar ao Carrinho"}>
              </BotaoGeral>

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