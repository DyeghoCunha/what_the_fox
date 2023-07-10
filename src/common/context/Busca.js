import { collection } from "firebase/firestore";
import { createContext, useState } from "react";
import { database } from "./FirebaseConfig";

const BuscaContext = createContext()

const BuscaProvider = ({ children }) => {


  const [resultadoDaBusca, setResultadoDaBusca] = useState([])

  const buscarObjetos = async (palavrasChave) => {
    const resultados = [];

    const colecoes = ['Apes', 'BladeMasters', 'Emotes', 'Fox', 'Goblins', 'Hemps'];

    for (const colecao of colecoes) {
      const querySnapshot = await collection(database, colecao)
        .where('frase', 'array-contains-any', palavrasChave)
        .get();

      querySnapshot.forEach((doc) => {
        const objeto = {
          id: doc.id,
          ...doc.data()
        };
        resultados.push(objeto);
      });
    }

    setResultadoDaBusca(resultados)
  };

  // Exemplo de uso
  const palavrasChave = ['palavra1', 'palavra2', 'palavra3'];
  buscarObjetos(palavrasChave)
    .then((resultados) => {
      console.log('Resultados da busca:', resultados);
    })
    .catch((error) => {
      console.error('Erro ao buscar objetos:', error);
    });



  const value = {
    buscarObjetos,
  }


  return (
    <BuscaContext.Provider value={value}>
      {children}
    </BuscaContext.Provider>
  )
}


export { BuscaContext, BuscaProvider }

