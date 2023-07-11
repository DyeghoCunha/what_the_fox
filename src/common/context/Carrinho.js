import { createContext, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseConfig";
import { arrayRemove, arrayUnion, collection, collectionGroup, deleteField, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ModalCardContext } from "./ModalCard";

const CarrinhoContext = createContext()


const CarrinhoProvider = ({ children }) => {

  const { usuario, database, usuarioUid } = useContext(FirebaseContext)
  const { valorFinalDoCard } = useContext(ModalCardContext)
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)
  const [carrinhoProdutos, setCarrinhoProdutos] = useState([])
 

  function handleAdicionaItemNoCarrinhoFirebase(objeto) {
    const objetoAtualizado = { ...objeto, valor: valorFinalDoCard }
    

    if (usuario) {
      //console.log("UPDATE ID: ", usuario[0]);
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
              setCarrinhoProdutos(data.carrinho)
              const arrayLength = data.carrinho.length;
              //console.log("Quantidade de itens no array:", arrayLength);
              //console.log("Itens do Carrinho:", data.carrinho);
              //localStorage.setItem("carrinhoProdutos", data.carrinho)
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

  function handleLimpaCarrinhoFirebase() {
  if (usuario) {
    console.log("UPDATE ID: ", usuario[0]);
    const docToUpdate = doc(database, `userDb/user/${usuarioUid}`, usuario[0]);
    updateDoc(docToUpdate, {
      carrinho: deleteField()
    })
      .then(() => {
        console.log("Todos os itens removidos do carrinho");
        setCarrinhoProdutos([]);
        setQuantidadeCarrinho(0);
        localStorage.removeItem('quantidadeCarrinho');
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}




function handleRemoveItemDoCarrinhoFirebase(card) {
  if (usuario) {
    console.log("UPDATE ID: ", usuario[0]);
    console.log("UPDATE ID: ", card.id);
    console.log("UPDATE Valor: ", card.valor);
    const docToUpdate = doc(database, `userDb/user/${usuarioUid}/${usuario[0]}`);

    // Obtém o documento atual do Firestore
    getDoc(docToUpdate)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const carrinhoAtual = docSnap.data().carrinho;

          // Filtra o carrinho atual para remover apenas o item correspondente
          const newCarrinho = carrinhoAtual.filter(item => !(item.valor === card.valor && item.id === card.id));

          // Atualiza o documento no Firestore com o novo carrinho
          updateDoc(docToUpdate, {
            carrinho: newCarrinho
          })
            .then(() => {
              console.log("Item removido do carrinho:", card.nome, card.id);
              setCarrinhoProdutos(newCarrinho);
              setQuantidadeCarrinho(newCarrinho.length);
              localStorage.setItem('quantidadeCarrinho', newCarrinho.length);
            })
            .catch((err) => {
              alert(err.message);
            });
        } else {
          console.log("O documento não existe");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}


  
  const valor = localStorage.getItem('Logado');
  const valor1 = localStorage.getItem('Usuario');



  const value = {
    handleAdicionaItemNoCarrinhoFirebase, quantidadeCarrinho,handleLimpaCarrinhoFirebase,
    carrinhoProdutos, setCarrinhoProdutos,handleRemoveItemDoCarrinhoFirebase
  }



  return (
    <CarrinhoContext.Provider value={value}>
      {children}
    </CarrinhoContext.Provider>
  )

}
export { CarrinhoContext, CarrinhoProvider }