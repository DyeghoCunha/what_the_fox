import React, { createContext, useContext, useEffect, useState } from "react";

const ModalCardContext = createContext()

const ModalCardProvider = ({ children }) => {

  //TODO _ Importar o Valor pelo Provider do Banco de Dados
  const [modalAberto, setModalAberto] = useState(false)
  const [valorAdicional, setValorAdicional] = useState(0)
  const [adicionalTotal, setAdicionalTotal] = useState(0);
  const [cartaoSelecionado, setCartaoSelecionado] = useState({})
  const [valorDoCartaoSelecionado, setValorDoCartaoSelecionado] = useState(0);
  const [valorCartao, setValorCartao] = useState(0)

  

  //!!___Valores Definitivos Finais_____

  const [valorFinalDoCard, setValorFinalDoCard] = useState(0);

  //!___________Adicional____Por___Itens_______


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

  useEffect(() => {
    const atualizado = Object.values(valorDoCartaoSelecionado).reduce((acc, val) => acc + val, 0);
    setAdicionalTotal(atualizado);
  }, [valorDoCartaoSelecionado]);

  const handleAdicionalDeItens = (event) => {
    const { id, checked } = event.target;
    setValorDoCartaoSelecionado((prevAdicional) => {
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
    const final = cartaoSelecionado.valor + adicionalTotal
    setValorAdicional(final);
  }, [adicionalTotal]);

  useEffect(() => {
    /* console.log("Valor Adicional: ", valorAdicional)
    console.log("Valor Final do Card: ", valorFinalDoCard)
    console.log("ValorDoCartaoSelecionado: ", valorDoCartaoSelecionado) */
  }, [valorAdicional, valorFinalDoCard,valorDoCartaoSelecionado ])

  const value = {
    modalAberto, setModalAberto, valorAdicional, setValorAdicional, setValorFinalDoCard,
    setCartaoSelecionado, handleAdicionalDeItens, setValorDoCartaoSelecionado, valorAdicional,
    valorFinalDoCard,valorDoCartaoSelecionado,valorCartao, setValorCartao
  }





  return (

    <ModalCardContext.Provider value={value}>
      {children}
    </ModalCardContext.Provider>
  )
}



export { ModalCardContext, ModalCardProvider }
