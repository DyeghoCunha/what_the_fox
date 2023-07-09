import { createContext, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseConfig";
import { arrayUnion, collection, collectionGroup, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ModalCardContext } from "./ModalCard";

const CarrinhoContext = createContext()


const CarrinhoProvider = ({ children }) => {

  const { usuario, database, usuarioUid } = useContext(FirebaseContext)
  const { valorFinalDoCard } = useContext(ModalCardContext)
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)

  function handleAdicionaItemNoCarrinhoFirebase(objeto) {
    const objetoAtualizado = { ...objeto, valor: valorFinalDoCard }
    console.log("Atualizado: ", objetoAtualizado)

    if (usuario) {

      console.log("UPDATE ID: ", usuario[0]);
      const docToUpdate = doc(database, `userDb/user/${usuarioUid}`, usuario[0]);
      updateDoc(docToUpdate, {
        carrinho: arrayUnion(objetoAtualizado)
      })
        .then(() => {
          console.log("Carrinho Inserido: ", objetoAtualizado);
          const getArrayLength = async () => {
            const docSnap = await getDoc(docToUpdate);

            if (docSnap.exists()) {
              const data = docSnap.data();
              const arrayLength = data.carrinho.length;
              console.log("Quantidade de itens no array:", arrayLength);
              setQuantidadeCarrinho(arrayLength)
              localStorage.setItem('quantidadeCarrinho', arrayLength);
            }
          };
          getArrayLength();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }
  
  
  const valor = localStorage.getItem('Logado');
  const valor1 = localStorage.getItem('Usuario');
  console.log("Valor: ", valor)
  console.log("Valor 2: ", valor1)

  
  
  
  
  
  
// Resto do seu código...







  const value = {
    handleAdicionaItemNoCarrinhoFirebase, quantidadeCarrinho
  }



  return (
    <CarrinhoContext.Provider value={value}>
      {children}
    </CarrinhoContext.Provider>
  )

}
export { CarrinhoContext, CarrinhoProvider }