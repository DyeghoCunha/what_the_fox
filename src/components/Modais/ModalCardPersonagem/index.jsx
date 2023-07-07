import React, { useContext, useEffect, useState } from 'react';
import styles from './ModalCardPersonagem.module.scss';


import BotaoGeral from "../../BotãoGeral"
import moeda150 from "../../../components/Decks/image/150.png"
import dados from "../../../assets/json/dados.json"
import { FavoritoContext } from '../../../common/context/Favoritos';
import IncrementoCheckBox from "../../Feature/ModalCardPersonagem/IncrementoCheckBox"
import Informativo from '../../Feature/ModalCardPersonagem/Informativo';

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
          <Informativo />

          <IncrementoCheckBox card={card} />

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





        </div>

      </div>
    </div>


  );
}


