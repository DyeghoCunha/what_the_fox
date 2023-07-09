import { createContext, useContext, useState } from "react";
import { FirebaseContext } from "./FirebaseConfig";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
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
          setQuantidadeCarrinho(usuario[0].carrinho.length)
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }



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