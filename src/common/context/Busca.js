import { collection, getDocs, query, where, includes } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { database } from "./FirebaseConfig";

const BuscaContext = createContext()

const BuscaProvider = ({ children }) => {


  const [resultadoDaBusca, setResultadoDaBusca] = useState([])
 const [objetos, setObjetos] = useState([]);
 


 const buscarObjetos = async (palavraChave) => {
  try {
    const colecoes = ['Apes', 'BladeMasters', 'Emotes', 'Fox', 'Goblins', 'Hemps'];
    const resultados = [];

    for (const colecao of colecoes) {
      const querySnapshot = await getDocs(collection(database, colecao));

      querySnapshot.forEach((doc) => {
        const objeto = {
          id: doc.id,
          ...doc.data()
        };

        // Verifica se a propriedade palavras existe e contém a palavra-chave
        if (objeto.frase && objeto.frase.includes(palavraChave)) {
          resultados.push(objeto);
        }
      });
    }

    setObjetos(resultados);
  } catch (error) {
    console.error('Erro ao buscar objetos:', error);
  }
};

  

/* const ageQuery = query(collectionRef, where("idade", "<", 41))
  const getDataQuery = (event) => {
    event.preventDefault()

    onSnapshot(ageQuery, (response) => {
      console.log("Querry: ", response.docs.map((item) => {
        return item.data()
      }))
    })
  } */









useEffect(()=>{
//console.log("Resultado do Array: ", objetos)
},[objetos])


  // Exemplo de uso

  const value = {
    objetos,
    buscarObjetos,
  }


  return (
    <BuscaContext.Provider value={value}>
      {children}
    </BuscaContext.Provider>
  )
}


export { BuscaContext, BuscaProvider }

